import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['task'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let task = json.task.id;
    json.task = task;

    return json;
  }
});
