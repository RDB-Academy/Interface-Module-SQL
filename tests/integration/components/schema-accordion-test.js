import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schema-accordion', 'Integration | Component | schema accordion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let task = Ember.Object.create({
    text: "Bla",
    schemaDef: Ember.Object.create({
      tableDefs: Ember.ArrayProxy.create({ content: [
        Ember.Object.create({
          name: "tablename",
          columDefs: Ember.ArrayProxy.create({ content : [
            Ember.Object.create({
              name: "colname",
              dataType: "BIGINT"
            })
          ]})
        })
      ]})
    })
  });

  this.set('TaskObject', task);

  this.render(hbs`{{schema-accordion TaskObject}}`);

  assert.ok(this.$().text().indexOf('tablename') > -1);
});
