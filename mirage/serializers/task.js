import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['schemaDef'],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let schemaDef = json.schemaDef.id;
    json.schemaDef = schemaDef;

    return json;
  }
});
