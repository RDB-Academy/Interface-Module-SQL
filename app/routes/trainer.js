import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('task', 1).then((task) => {
      task.get('tables').then((tables) => {
        tables.forEach((table) => {
          table.get('columns');
        });
      });
      return task;
    });
  }
});
