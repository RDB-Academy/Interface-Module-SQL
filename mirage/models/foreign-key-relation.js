import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  sourceColumn: belongsTo('columnDef'),
  targetColumn: belongsTo('columnDef'),
  foreignKey: belongsTo('foreignKey')
});
