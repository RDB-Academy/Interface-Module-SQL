import Ember from 'ember';

export default Ember.Route.extend({
  /*currentTask: null,*/
  model() {
    /*let _this = this;*/
    /*return Ember.computed('currentTask', function() {
      if (!currentTask) {
        return null;
      }
      return this.store.findRecord('task', currentTask);
    })*/
    /*let relations = this.store.findAll('relation');*/
    /*return relations*/
    this.store.findAll('task');
    return this.store.findRecord('task', 1);
  }
});
