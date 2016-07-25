import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  solution: attr('string'),
  checkTaskSolution() {
    let modelName = this.constructor.modelName;
    let adapter = this.store.adapterFor(modelName);
    return adapter.checkTaskSolution(this.serialize());
  }
});
