import Ember from 'ember';
import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  sourceColumn: belongsTo('columnDef', {inverse: 'foreignKeySources'}),
  targetColumn: belongsTo('columnDef', {inverse: 'foreignKeyTargets'}),
  foreignKey: belongsTo('foreignKey'),
  sourceTableId: Ember.computed("sourceColumn.tableDef.id", function() {
    return this.get("sourceColumn.tableDef.id");
  })
});
