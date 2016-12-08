import { moduleForModel, test } from 'ember-qunit';

moduleForModel('column-def', 'Unit | Model | columnDef', {
  // Specify the other units that are required for this test.
  needs: ['model:tableDef', 'model:foreignKeyRelation']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
