import Ember from 'ember';

const TrainerAceEditorComponent = Ember.Component.extend({
  content: Ember.computed({
    get() {
      console.log("HERE");
      return this.editor.getSession().getValue();
    },
    set(key, val) {
      if (!this.editor) {
        this.preset = val;
        return val;
      }

      var cursor = this.editor.getCursorPosition();
      console.log("HERE2");

      this.editor.getSession().setValue(val);
      console.log("HERE2");
      this.editor.moveCursorToPosition(cursor);
      return val;
    }
  }),

 didInsertElement: function() {
   this.editor = window.ace.edit('editor');
   this.set('content', this.get('exportData'));
   this.editor.setTheme('ace/theme/solarized_dark');
   this.editor.getSession().setMode('ace/mode/sql');

   this.editor.resize();

   var self = this;
   this.editor.on('change', function() {
     self.notifyPropertyChange('content');
   });

   if (this.preset) {
     this.set('content', this.preset);
     this.preset = null;
   }
 },

 actions: {
   exportData() {
     this.set('exportData', this.get('content'));
     this.get('onExportData')();
   }
 }
});

TrainerAceEditorComponent.reopenClass({
});

export default TrainerAceEditorComponent;
