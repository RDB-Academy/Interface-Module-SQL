import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  taskText: attr('string'),
  schema: belongsTo('schema'),
  userStatement: attr('string'),
  resultSet: attr()
});
