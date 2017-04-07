import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('result-correct-display', 'Integration | Component | result correct display', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('tries', 1);
  this.set('displayStats',true);
  
  this.render(hbs`{{result-correct-display}}`);

  assert.ok(true);
});
