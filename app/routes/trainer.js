import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let tasktrial = this.store.findRecord('tasktrial', 1)
    .then(tasktrial => tasktrial, () => {
      if(true) {
        return this.store.createRecord('tasktrial', {}).save();
      }
      return null;
    });

    /* Load dependency data asynchronusly */
    tasktrial.then((tasktrial) => {
      if (tasktrial == null) {
        throw new Error('Server did not return a TaskTrial');
      }
      return tasktrial.get('task');
    }).then((task) => {
      if (task == null) {
        throw new Error('Server did not return a Task');
      }
      return task.get('schema');
    }).then((schema) => {
      if (schema == null) {
        throw new Error('Server did not return a Schema');
      }
      return schema.get('tables');
    }).then((tables) => {
      tables.forEach((table) => {
        table.get('columns');
      });
    }).catch((error) => {
      this.render('error', {model:error});
    });

    return tasktrial;
  }
});
