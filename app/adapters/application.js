import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

const Applicationadapter = JSONAPIAdapter.extend({
  authKey: localStorage.getItem('auth-key'),
  namespace: 'api',
  headers: Ember.computed('authKey', function() {
    return {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'auth-key': this.get('authKey')
    };
  }),

  handleResponse(response, headers, payload, requestData) {
    if (headers["auth-key"]) {
      localStorage.setItem('auth-key', headers["auth-key"]);
      this.set('authKey', headers["auth-key"]);
    }

    return this._super(response, headers, payload, requestData);
  }
});

export default Applicationadapter;
