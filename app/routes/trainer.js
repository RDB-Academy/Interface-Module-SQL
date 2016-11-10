import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let task = this.store.findRecord('task', 1);

    /* Load dependency data asynchronusly */
    task.then((task) => {
      return task.get('schema');
    }).then((schema) => {
      return schema.get('tables');
    }).then((tables) => {
      tables.forEach((table) => {
        table.get('columns');
      });
    });

    return task;
  }
});
