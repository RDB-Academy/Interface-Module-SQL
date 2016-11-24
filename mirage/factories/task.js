import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text: faker.list.cycle('Select all user', 'Select one user'),
  afterCreate(task, server) {
    task.schemaDef = server.create('schemaDef');
    task.save();
  }
});
