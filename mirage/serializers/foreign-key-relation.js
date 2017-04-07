import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: [ 'sourceColumn', 'targetColumn' ],
  serialize(){
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);


    let sourceColumn = json.sourceColumnId;
    json.sourceColumn = sourceColumn;

    let targetColumn = json.targetColumnId;
    json.targetColumn = targetColumn;

    return json;
  }
});
