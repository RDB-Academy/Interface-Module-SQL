import { Factory, faker, hasMany, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("User","Haus"),
  columns: hasMany('column'),
  task: belongsTo('tasks'),
  afterCreate(relation, server) {
    let cols = [];
    let i;
    for (i = 0; i< 10; i++) {
      cols.push(server.create('column'));
    }
    relation.columns = cols;
    relation.save();
  }
});
