import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['columns'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let columns = json.columns.map(column => column.id);
    json.columns = columns;
    json.task= undefined;

    return json;
  }
});
