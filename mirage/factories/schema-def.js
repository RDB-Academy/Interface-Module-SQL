import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(schemaDef, server) {
    let rels = [];
    let i;
    let max = faker.list.random(2,3,4)();
    for (i=0; i < max; i++) {
      rels.push(server.create('tableDef'));
    }
    schemaDef.tableDefs = rels;
    schemaDef.save();
    let foreignKeys = [];
    let amount = Math.random() * 6;

    for (i = 0; i < amount; i++) {
      let foreignKey = server.create('foreignKey', {schemaDef: schemaDef});

      foreignKeys.push(foreignKey);
    }

    schemaDef.foreignKeys = foreignKeys;
    schemaDef.save();
  }
});
