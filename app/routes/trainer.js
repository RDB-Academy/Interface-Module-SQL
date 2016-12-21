import Ember from 'ember';
import Promise from 'rsvp';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    /* Create a new TaskTrial Object */
    let tasktrial = this.store.createRecord('taskTrial', {}).save();

    /* Load dependency data asynchronusly */
    let sideload = tasktrial.then((tasktrial) => {
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
      return Promise.all([schema.get('tableDefs'), schema.get('foreignKeys')]);
    }).then((values) => {
      let tables = values[0];
      let foreignKeys = values[1];
      tables.forEach((table) => {
        table.get('columnDefs');
      });
      foreignKeys.forEach((foreignKey) => {
        foreignKey.get("sourceTableId");
        foreignKey.get('foreignKeyRelations').then((foreignKeyRelation) => {
          foreignKeyRelation.get("sourceTableId");
        }
        );
      });
    }).catch((error) => {
      this.render('error', {model:error});
    });

    /* Wait for all data to be load */
    return RSVP.all([tasktrial, sideload]).then(function(array) {
      return array[0];
    });
  },
  actions: {
    refreshModel(callback) {
      this.refresh().then(callback);
    }
  }
});
