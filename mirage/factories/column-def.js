import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("email", "id", "name", "color", "size"),
  dataType: faker.list.random("VARCHAR(255)", "INTEGER", "BOOLEAN"),
  isPrimary: faker.list.random(true, false),
  isNullable: faker.list.random(true, false)
});
