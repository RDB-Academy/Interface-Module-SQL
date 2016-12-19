import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("email", "id", "name", "color", "size"),
  dataType: faker.list.random("VARCHAR(255)", "INTEGER", "BOOLEAN"),
  primary: faker.list.random(true, false),
  nullable: faker.list.random(true, false)
});
