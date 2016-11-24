import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle("User","Haus"),
  afterCreate(tableDef, server) {
    let cols = [];
    let i;
    let max = faker.list.random(3,4,5,6,7,8,9)();
    for (i = 0; i< max; i++) {
      cols.push(server.create('columnDef'));
    }
    tableDef.columnDefs = cols;
    tableDef.save();
  }
});
