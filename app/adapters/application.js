import JSONAPIAdapter from 'ember-data/adapters/json-api';

const Applicationadapter = JSONAPIAdapter.extend({
  namespace: 'api'
});

export default Applicationadapter;
