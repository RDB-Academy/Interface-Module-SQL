import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schema-accordion', 'Integration | Component | schema accordion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let tasks = {
    taskText: "Bla",
    relations: [
      {
        name: "relname",
        columns: [
          {
            name: "colname",
            columnType: "ColType"
          }
        ]
      }
    ]
  };

  this.set('TaskObject', tasks);

  this.render(hbs`{{schema-accordion TaskObject}}`);

  assert.ok(this.$().text().indexOf('Database-Schema') > -1);
});
