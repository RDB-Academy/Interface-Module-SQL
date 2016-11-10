import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  tables: hasMany('table'),
  afterCreate(schema, server) {
    let rels = [];
    let i;
    let max = faker.list.random(1,2,3,4)();
    for (i=0; i < max; i++) {
      rels.push(server.create('table'));
    }
    schema.tables = rels;
    schema.save();
  }
});
