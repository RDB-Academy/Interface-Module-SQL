import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: [ 'sourceColumn', 'targetColumn' ],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    console.log(json);

    let sourceColumn = json.sourceColumn.id;
    json.sourceColumn = sourceColumn;

    let targetColumn = json.targetColumn.id;
    json.targetColumn = targetColumn;

    return json;
  }
});
