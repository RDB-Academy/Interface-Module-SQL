import { Factory, faker, hasMany, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("User","Haus"),
  columns: hasMany('column'),
  task: belongsTo('tasks'),
  afterCreate(relation, server) {
    var col1 = server.create('column');
    var col2 = server.create('column');
    relation.columns = [col1, col2];
    relation.save();
  }
});
