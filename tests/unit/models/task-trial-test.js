import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task-trial', 'Unit | Model | task trial', {
  // Specify the other units that are required for this test.
  needs: ['model:task']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
