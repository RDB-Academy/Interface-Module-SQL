import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schema-accordion', 'Integration | Component | schema accordion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{schema-accordion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#schema-accordion}}
      template block text
    {{/schema-accordion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
