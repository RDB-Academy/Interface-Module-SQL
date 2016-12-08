import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  sourceColumn: belongsTo('columnDef', {inverse: 'foreignKeySources'}),
  targetColumn: belongsTo('columnDef', {inverse: 'foreignKeyTargets'}),
  foreignKey: belongsTo('foreignKey')
});
