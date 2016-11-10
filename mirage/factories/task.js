import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  taskText: faker.list.cycle('Select all user', 'Select one user'),
  tables: hasMany('table'),
  afterCreate(task, server) {
    let rels = [];
    let i;
    let max = faker.list.random(1,2,3,4)();
    for (i=0; i < max; i++) {
      rels.push(server.create('table'));
    }
    task.tables = rels;
    task.save();
  }
});
