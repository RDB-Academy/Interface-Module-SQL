import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('foreign-key', 'Unit | Model | foreign key', {
  // Specify the other units that are required for this test.
  needs: ['model:foreignKeyRelation', 'model:schemaDef']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);

  model.foreignKeyRelations = Ember.ArrayProxy.create({content: [
    Ember.Object.create({
      sourceTableId: 1337
    }),
    Ember.Object.create({
      sourceTableId: 1336
    })
  ]});

  assert.ok(model.get("sourceTableIds").indexOf(1337) > -1);
  assert.ok(model.get("sourceTableIds").indexOf(1336) > -1);
  assert.ok(model.get("sourceTableIds").indexOf(1338) === -1);
});
