import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('schemaDef', 'Unit | Model | schemaDef', {
  // Specify the other units that are required for this test.
  needs: ["model:tableDef", "model:foreignKey"]
});

test('it exists', function(assert) {
  let model = this.subject({name: "testschema"});
  // let store = this.store();
  assert.ok(!!model);

  /* nonSingleForeignKeys: Ember.computed('foreignKeys.@each.foreignKeyRelations', function() {
    this.get("foreignKeys").getEach("foreignKeyRelations");
    return this.get('foreignKeys').filter(key => {
      return key.get('foreignKeyRelations').get('length') > 1;
    });
  }) */
  model.foreignKeys = Ember.ArrayProxy.create({content : [
    Ember.Object.create({
      foreignKeyRelations: Ember.ArrayProxy.create({ content: [{}]})
    }),
    Ember.Object.create({
      foreignKeyRelations: Ember.ArrayProxy.create({ content: [{},{}]})
    }),
    Ember.Object.create({
      foreignKeyRelations: Ember.ArrayProxy.create({ content: [{},{}]})
    })
  ]});

  assert.equal(model.get('nonSingleForeignKeys.length'), 2);
});
