import Ember from 'ember';

const TrainerAceEditorComponent = Ember.Component.extend({
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
    let _this = this;
    this.editor.commands.addCommand({
      name: 'autocommit',
      bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
      exec: function() {_this.send('exportData');}
    });

    this.editor.resize();

    var self = this;
    this.editor.on('change', function() {
      self.notifyPropertyChange('editorContent');
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
    }
  }
});

export default TrainerAceEditorComponent;
