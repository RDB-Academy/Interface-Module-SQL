import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['relations'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let relations = json.relations.map(relation => relation.id);
    json.relations = relations;

    return json;
  }
});
