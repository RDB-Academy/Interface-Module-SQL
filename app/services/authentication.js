import Ember from 'ember';

export default Ember.Service.extend({
  authKey: null,
  authenticate(credentials) {
    let _this=this;
    return Ember.$.post("/api/login", {anonymous: true})
      .then((session) => {
        _this.set('authKey', session);
        return session;
      });
  },

}) ;
