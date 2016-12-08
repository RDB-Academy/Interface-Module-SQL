import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text: faker.list.cycle('Select all user', 'Select one user'),
  difficulty: faker.list.random(1,2,3,4,5),
  afterCreate(task, server) {
    task.schemaDef = server.create('schemaDef');
    task.save();
  }
});
