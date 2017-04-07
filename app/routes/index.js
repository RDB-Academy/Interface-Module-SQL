import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('authentication'),
  beforeModel(){
    let _this = this;
    this.get("session").authenticate(null)
      .then((session) => {
        console.log(session);
        _this.transitionTo("trainer");
      });
  }
});
