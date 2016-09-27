import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  taskText: faker.list.cycle('Select all user', 'Select one user'),
  relations: hasMany('relation'),
  afterCreate(task, server) {
    var rel1 = server.create('relation');
    var rel2 = server.create('relation');
    task.relations = [rel1, rel2];
    task.save();
  }
});
