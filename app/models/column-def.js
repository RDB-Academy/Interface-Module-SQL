import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  dataType: attr('string'),
  primary:attr('boolean'),
  nullable:attr('boolean'),
  tableDef: belongsTo('tableDef'),
  foreignKeySources: hasMany('foreignKeyRelation', {inverse: 'sourceColumn'}),
  foreignKeyTargets: hasMany('foreignKeyRelation', {inverse: 'targetColumn'}),
  singleForeignKeys: Ember.computed('foreignKeySources.length', function() {
    return this.get('foreignKeySources')
      .filter(foreignKeyRelation => {
        return foreignKeyRelation.get("foreignKey.foreignKeyRelations.length") === 1;
      })
      .map(foreignKeyRelation => foreignKeyRelation.get('targetColumn.tableDef.name'));
  })
});
