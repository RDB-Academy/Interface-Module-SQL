import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirect() {
      this.transitionTo("trainer");
    }
  }
});
