import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  dataType: attr('string'),
  isPrimary:attr('boolean'),
  isNullable:attr('boolean'),
  tableDef: belongsTo('tableDef'),
  foreignKeySources: hasMany('foreignKeyRelation', {inverse: 'sourceColumn'}),
  foreignKeyTargets: hasMany('foreignKeyRelation', {inverse: 'targetColumn'}),
  isSingleForeignKey: Ember.computed('foreignKeySources.length', function() {
    if (this.get('foreignKeySources').get('length') === 1) {
      return this.get('foreignKeySources').get('firstObject').get('targetColumn').get('tableDef').get('name');
    }
    else {
      return null;
    }
  })
});
