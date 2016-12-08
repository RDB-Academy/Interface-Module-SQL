import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(foreignKey, server) {
    let tables = server.db.tableDefs.where({schemaDefId: foreignKey.attrs.schemaDefId});

    let foreignKeyRelations = [];
    let i = 0;
    let amount = Math.random() * 3;

    let fromTable = tables[Math.floor(Math.random() * tables.length)];
    let toTable;
    do {
      toTable = tables[Math.floor(Math.random() * tables.length)];
    } while (fromTable === toTable);

    for (i = 0; i < amount; i++) {
      let sourceColumns = server.db.columnDefs.where({tableDefId: fromTable.id});
      let targetColumns = server.db.columnDefs.where({tableDefId: toTable.id});

      let foreignKeyRelation = server.create('foreignKeyRelation',
          {
            sourceColumnWill: sourceColumns[Math.floor(Math.random() * sourceColumns.get("length"))],
            targetColumnWill: targetColumns[Math.floor(Math.random() * targetColumns.get("length"))]
          });
      foreignKeyRelations.push(foreignKeyRelation);
    }

    foreignKey.foreignKeyRelations = foreignKeyRelations;

    foreignKey.save();
  }
});
