import Ember from 'ember';
/**
 * Injected Parameters:
 *   disabled - boolean - controls the usability of the Ace-Editor
 *   editorContent
 *   onExportData
 *   onNewTask
 *   onShowStats
 */
const TrainerAceEditorComponent = Ember.Component.extend({
  difficulties: [1, 2, 3, 4, 5],
  getDisabled: Ember.observer('disabled', function() {
    if (this.get('disabled')) {
      this.editor.setOption("readOnly", true);
      this.$('#editor').addClass("disabled");
    } else {
      if (this.editor) {
        this.editor.setOption("readOnly", false);
        this.$('#editor').removeClass("disabled");
      }
    }
  }),
  editorContent: Ember.computed({
    get() {
      return this.editor.getSession().getValue();
    },
    set(key, val) {
      if (!val) {
        val = "";
      }
      if (!this.editor) {
        this.preset = val;
        return val;
      }

      var cursor = this.editor.getCursorPosition();
      this.editor.getSession().setValue(val);
      this.editor.moveCursorToPosition(cursor);
      return val;
    }
  }),
  didInsertElement: function() {
    this.editor = window.ace.edit('editor');
    this.editor.$blockScrolling = Infinity;
    this.editor.setTheme('ace/theme/pastel_on_dark');
    this.editor.getSession().setMode('ace/mode/sql');
    this.editor.setOptions({
      fontSize: "12pt"
    });
    this.editor.resize();

    let _this = this;
    this.editor.commands.addCommand({
      name: 'autocommit',
      bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
      exec: function() {_this.send('exportData');}
    });
    this.editor.on('change', function() {
      _this.notifyPropertyChange('editorContent');
    });

    if (this.preset) {
      this.set('editorContent', this.preset);
      this.preset = null;
    }
  },

  actions: {
    exportData() {
       this.get('onExportData')(this.get('editorContent'));
    },
    newTask() {
      this.get('onNewTask')();
    },
    showStats() {
      this.get('onShowStats')();
    },
    setDifficulty(difficulty) {
      this.get('onChangeDifficulty')(difficulty);
    }
  }
});

export default TrainerAceEditorComponent;
