import JSONAPIAdapter from 'ember-data/adapters/json-api';

const Applicationadapter = JSONAPIAdapter.extend({
  namespace: 'api',
  headers: {
    'Content-Type' : 'application/json'
  }
});

export default Applicationadapter;
