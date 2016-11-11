import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let tasktrial = this.store.findRecord('tasktrial', 1)
    .then(tasktrial => tasktrial, (error) => {
      if(true) {
        return this.store.createRecord('tasktrial', {}).save();
      }
      return null;
    });

    /* Load dependency data asynchronusly */
    tasktrial.then((tasktrial) => {
      return tasktrial.get('task');
    }).then((task) => {
      return task.get('schema');
    }).then((schema) => {
      return schema.get('tables');
    }).then((tables) => {
      tables.forEach((table) => {
        table.get('columns');
      });
    });

    return tasktrial;
  }
});
