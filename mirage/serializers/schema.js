import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['tables'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let tables = json.tables.map(table => table.id);
    json.tables = tables;

    return json;
  }
});
