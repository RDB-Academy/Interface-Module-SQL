import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  taskText: attr('string'),
  tables: hasMany('table'),
  userStatement: attr('string'),
  resultSet: attr()
});
