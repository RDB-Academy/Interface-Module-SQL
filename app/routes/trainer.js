import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('task', 1).then((task) => {
      task.get('relations').then((relations) => {
        relations.forEach((relation) => {
          relation.get('columns');
        });
      });
      return task;
    });
  }
});
