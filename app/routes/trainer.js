import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let tasktrial = this.store.findRecord('taskTrial', 1)
    .then(tasktrial => tasktrial, () => {
      if(true) {
        return this.store.createRecord('tasktrial', {}).save();
      }
      return null;
    });

    /* Load dependency data asynchronusly */
    tasktrial.then((tasktrial) => {
      if (!tasktrial) {
        throw new Error('Server did not return a TaskTrial');
      }
      return tasktrial.get('task');
    }).then((task) => {
      if (!task) {
        throw new Error('Server did not return a Task');
      }
      return task.get('schemaDef');
    }).then((schema) => {
      if (!schema) {
        throw new Error('Server did not return a Schema');
      }
      return schema.get('tableDefs');
    }).then((tables) => {
      tables.forEach((table) => {
        table.get('columnDefs');
      });
    }).catch((error) => {
      this.render('error', {model:error});
    });
    return tasktrial;
  }
});
