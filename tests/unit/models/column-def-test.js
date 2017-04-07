import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('column-def', 'Unit | Model | columnDef', {
  // Specify the other units that are required for this test.
  needs: ['model:tableDef', 'model:foreignKeyRelation']
});

test('it exists', function(assert) {
  let model = this.subject({name: "col1", id: 1, dataType: "BIGINT", primary: false, nullable: true});

  assert.ok(!!model);
  
  /* Test correct filtering of singleForeignKeys */
  model.foreignKeySources = Ember.ArrayProxy.create({ content : [
    Ember.Object.create({
      foreignKey: Ember.Object.create({
        foreignKeyRelations: Ember.ArrayProxy.create({
          content: [{}]
        })
      })
    }),
    Ember.Object.create({
      foreignKey: Ember.Object.create({
        foreignKeyRelations: Ember.ArrayProxy.create({
          content: [{},{}]
        })
      })
    })
  ]});

  assert.equal(model.get('singleForeignKeys.length'), 1);

});
