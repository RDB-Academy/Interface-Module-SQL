import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['columnDefs'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let columnDefs = json.columnDefs.map(columnDef => columnDef.id);
    json.columnDefs = columnDefs;
    json.task= undefined;

    return json;
  }
});
