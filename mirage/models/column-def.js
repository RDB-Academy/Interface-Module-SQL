import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  foreignKeySources: hasMany("foreignKeyRelation", { inverse: 'sourceColumn' }),
  foreignKeyTargets: hasMany("foreignKeyRelation", { inverse: 'targetColumn' })
});
