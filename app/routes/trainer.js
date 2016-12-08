import Ember from 'ember';
import Promise from 'rsvp';

export default Ember.Route.extend({
  model() {
    let tasktrial = this.store.createRecord('taskTrial', {}).save();

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
    return tasktrial;
  }
});
