import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tableDef', 'Unit | Model | tableDef', {
  // Specify the other units that are required for this test.
  needs: ['model:columnDef', 'model:schemaDef']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
