import Ember from 'ember';

const TrainerAceEditorComponent = Ember.Component.extend({
  content: Ember.computed({
    get(key) {
      return this.editor.getSession().getValue();
    },
    set(key, val) {
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
   console.log(this.get('exportData'));
   var context = this.$()[0];
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
     console.log(this.get('content'));
     this.set('exportData', this.get('content'));
   }
 }
});

TrainerAceEditorComponent.reopenClass({
})

export default TrainerAceEditorComponent;
