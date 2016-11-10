import { moduleForModel, test } from 'ember-qunit';

moduleForModel('column', 'Unit | Model | column', {
  // Specify the other units that are required for this test.
  needs: ['model:table']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
