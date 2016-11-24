import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(foreignKey, server) {
    let tables = server.db.tableDefs.where({schemaDefId: foreignKey.attrs.schemaDefId})

    let sourceColumn = server.db.columnDefs.where({tableDefId: tables[0].id});
    let targetColumn = server.db.columnDefs.where({tableDefId: tables[1].id});

    let foreignKeyRelation = server.create('foreignKeyRelation',
        {sourceColumnWill: sourceColumn[0], targetColumnWill: targetColumn[0]});

    foreignKey.foreignKeyRelations = [ foreignKeyRelation ];

    foreignKey.save();
  }
});
