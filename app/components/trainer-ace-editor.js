import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'pre',
  content: function(key, val) {
   if (!this.editor) {
     this.preset = val;
     return val;
   }
   if (arguments.length === 1) {
     return this.editor.getSession().getValue();
   }
   var cursor = this.editor.getCursorPosition();
   this.editor.getSession().setValue(val);
   this.editor.moveCursorToPosition(cursor);
   return val;
 }.property(),

 didInsertElement: function() {
   var context = this.$()[0];
   context.id = 'editor';
   context.style.height = "38vh";
   this.editor = window.ace.edit('editor');
   this.editor.setTheme('ace/theme/solarized_dark');
   this.editor.getSession().setMode('ace/mode/sql');

   context.height = context.width;
   this.editor.resize();

   var self = this;
   this.editor.on('change', function() {
     self.notifyPropertyChange('content');
   });

   if (this.preset) {
     this.set('content', this.preset);
     this.preset = null;
   }
 }
});
