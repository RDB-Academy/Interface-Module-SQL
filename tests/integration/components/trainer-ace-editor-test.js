import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trainer-ace-editor', 'Integration | Component | trainer ace editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trainer-ace-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trainer-ace-editor}}
      template block text
    {{/trainer-ace-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
