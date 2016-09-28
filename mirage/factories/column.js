import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("email", "id", "name", "color", "size"),
  columnType: faker.list.random("VARCHAR(255)", "INTEGER", "BOOLEAN")
});
