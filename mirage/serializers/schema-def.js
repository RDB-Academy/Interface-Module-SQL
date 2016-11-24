import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['tableDefs'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let tableDefs = json.tableDefs.map(tableDef => tableDef.id);
    json.tableDefs = tableDefs;

    return json;
  }
});
