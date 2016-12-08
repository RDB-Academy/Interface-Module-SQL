import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(foreignKeyRelation) {
    console.log(foreignKeyRelation);

    foreignKeyRelation.sourceColumnId = foreignKeyRelation.sourceColumnWill.id;
    foreignKeyRelation.targetColumnId = foreignKeyRelation.targetColumnWill.id;

    foreignKeyRelation.save();
  }
});
