import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(foreignKeyRelation, server) {
    console.log(foreignKeyRelation);

    foreignKeyRelation.sourceColumnId = foreignKeyRelation.sourceColumnWill.id;
    foreignKeyRelation.targetColumnId = foreignKeyRelation.targetColumnWill.id;

    foreignKeyRelation.save();
  }
});
