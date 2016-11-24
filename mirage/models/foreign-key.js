import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  schemaDef: belongsTo('schemaDef'),
  foreignKeyRelations: hasMany('foreignKeyRelation')
});
