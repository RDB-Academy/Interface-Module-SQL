import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tableDef', 'Unit | Model | tableDef', {
  // Specify the other units that are required for this test.
  needs: ['model:columnDef', 'model:schemaDef']
});

test('it exists', function(assert) {

let model = this.subject({ id : 1 });
  // let store = this.store();
  assert.ok(!!model);

  model.schemaDef = Ember.Object.create({
    nonSingleForeignKeys: Ember.ArrayProxy.create({ content : [
      Ember.Object.create({
        sourceTableIds: Ember.ArrayProxy.create({ content : [
          "2",
          "3"
        ]})
      })
    ]})
  });

  assert.ok(model.get('hasCombinedForeignKeys.length') === 0);



  Ember.set(model, 'schemaDef', Ember.Object.create({
    nonSingleForeignKeys: Ember.ArrayProxy.create({ content : [
      Ember.Object.create({
        sourceTableIds: Ember.ArrayProxy.create({ content : [
          "1"
        ]})
      })
    ]})
  }));

  assert.ok(model.get('hasCombinedForeignKeys.length') > 0);

});
