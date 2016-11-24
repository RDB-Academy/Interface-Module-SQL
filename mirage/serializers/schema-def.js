import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['tableDefs', 'foreignKeys'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let tableDefs = json.tableDefs.map(tableDef => tableDef.id);
    json.tableDefs = tableDefs;

    let foreignKeys = json.foreignKeys.map(foreignKey => foreignKey.id);
    json.foreignKeys = foreignKeys;

    return json;
  }
});
