import { moduleForModel, test } from 'ember-qunit';

moduleForModel('foreign-key', 'Unit | Model | foreign key', {
  // Specify the other units that are required for this test.
  needs: ['model:foreignKeyRelation', 'model:schemaDef']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
