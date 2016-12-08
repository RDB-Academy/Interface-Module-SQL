import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  schemaDef: belongsTo('schemaDef'),
  columnDefs: hasMany('column-def'),
  hasCombinedForeignKeys: Ember.computed("schemaDef.nonSingleForeignKeys.@each.sourceTableIds", function() {
    let _this = this;

    return this.get("schemaDef.nonSingleForeignKeys").filter(key => {
      return key.get("sourceTableIds").every(sourceTableId => {
        return sourceTableId === _this.get("id");
      });
    });
  })
});
