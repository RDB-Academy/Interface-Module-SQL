import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  columns: hasMany('column')
});
