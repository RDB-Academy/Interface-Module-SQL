import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dificulty-element', 'Integration | Component | dificulty element', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('difficulty',1);
  this.render(hbs`{{dificulty-element}}`);

  assert.equal(this.$().text().trim(), '');


});
