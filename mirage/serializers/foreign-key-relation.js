import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: [ 'sourceColumn', 'targetColumn' ],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    let sourceColumn = json.sourceColumn.id;
    json.sourceColumn = sourceColumn;

    let targetColumn = json.targetColumn.id
    json.targetColumn = targetColumn;

    return json;
  }
});
