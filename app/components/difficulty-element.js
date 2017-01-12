import Ember from 'ember';

export default Ember.Component.extend({
  difficulty1: Ember.computed("difficulty", function() {
    return this.get("difficulty") >= 1;
  }),
  difficulty2: Ember.computed("difficulty", function() {
    return this.get("difficulty") >= 2;
  }),
  difficulty3: Ember.computed("difficulty", function() {
    return this.get("difficulty") >= 3;
  }),
  difficulty4: Ember.computed("difficulty", function() {
    return this.get("difficulty") >= 4;
  }),
  difficulty5: Ember.computed("difficulty", function() {
    return this.get("difficulty") >= 5;
  })
});
