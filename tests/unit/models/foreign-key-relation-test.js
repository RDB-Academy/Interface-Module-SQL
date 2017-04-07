import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('foreign-key-relation', 'Unit | Model | foreign key relation', {
  // Specify the other units that are required for this test.
  needs: ['model:foreignKey', 'model:columnDef']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);

  /* Test correct sourceTableId */
  model.sourceColumn = Ember.Object.create({
    tableDef: Ember.Object.create({
      id: 1337
    })
  });

  assert.equal(model.get("sourceTableId"), 1337);

});
