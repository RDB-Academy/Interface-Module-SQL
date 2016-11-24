import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  sourceColumn: belongsTo('columnDef', {inverse: 'foreignKeySources'}),
  targetColumn: belongsTo('columnDef', {inverse: 'foreignKeyTargets'}),
  foreignKey: belongsTo('foreignKey')
});
