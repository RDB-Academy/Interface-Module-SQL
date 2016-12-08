import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  schemaDef: belongsTo('schemaDef'),
  foreignKeyRelations: hasMany('foreignKeyRelation'),
  sourceTableIds: Ember.computed("foreignKeyRelations.@each.sourceTableId", function() {
    return this.get("foreignKeyRelations").getEach("sourceTableId")
  })
});
