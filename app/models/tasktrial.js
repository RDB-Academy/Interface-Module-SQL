import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  userStatement: attr('string'),
  resultSet: attr(),
  isCorrect: attr('boolean'),
  task: belongsTo('task')
});
