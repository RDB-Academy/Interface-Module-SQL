import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trainer-ace-editor', 'Integration | Component | trainer ace editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let text = 'asas';

  this.set('exportData', text);

  this.render(hbs`{{trainer-ace-editor}}`);

  assert.ok(true);

});
