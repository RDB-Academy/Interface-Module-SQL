import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  tableDefs: hasMany('tableDef'),
  foreignKeys: hasMany('foreignKeys'),
  nonSingleForeignKeys: Ember.computed('foreignKeys.@each.foreignKeyRelations', function() {
    this.get("foreignKeys").getEach("foreignKeyRelations");
    return this.get('foreignKeys').filter(key => {
      return key.get('foreignKeyRelations').get('length') > 1
    })
  })
});
