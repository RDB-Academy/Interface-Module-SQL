import Ember from 'ember';

export default Ember.Controller.extend({
  editorContent:'asdasd',
  actions:{
    exportData() {
      let tasksolution = this.store.createRecord('tasksolution', {
        solution: this.get('editorContent')
      });

      tasksolution.checkTaskSolution();
    },
    requestTask() {
      //NONRESTFULL CALL
    }
  }
});
