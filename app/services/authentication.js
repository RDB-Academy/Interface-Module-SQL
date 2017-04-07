import Ember from 'ember';

export default Ember.Service.extend({
  session: localStorage.getItem("session"),
  authKey: Ember.computed.oneWay('session', () => {
    return this.get('session');
  }),
  authenticate() {
    let _this = this;
    return Ember.$.post("/api/login", { anonymous: true })
      .then((json) => {
        let session = JSON.parse(json);
        _this.set('session', session.id);
        return session;
      });
  },
  logout() {
    this.set("session", null);
    localStorage.removeItem("session");
    return Ember.$.get("/api/logout");
  }

}) ;
