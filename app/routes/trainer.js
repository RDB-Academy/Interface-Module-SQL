import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let task = this.store.findAll('task');
    return task;
  }
});
