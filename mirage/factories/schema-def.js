import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(schemaDef, server) {
    let rels = [];
    let i;
    let max = faker.list.random(1,2,3,4)();
    for (i=0; i < max; i++) {
      rels.push(server.create('tableDef'));
    }
    schemaDef.tableDefs = rels;
    schemaDef.save();
  }
});
