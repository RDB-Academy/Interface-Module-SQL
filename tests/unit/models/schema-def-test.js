import { moduleForModel, test } from 'ember-qunit';

moduleForModel('schemaDef', 'Unit | Model | schemaDef', {
  // Specify the other units that are required for this test.
  needs: ["model:tableDef", "model:foreignKey"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
