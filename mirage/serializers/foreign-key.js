import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: [ 'foreignKeyRelations' ],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let foreignKeyRelations = json.foreignKeyRelations.map(tableDef => tableDef.id);
    json.foreignKeyRelations = foreignKeyRelations;

    return json;
  }
});
