import Ember from 'ember';

export default Ember.Component.extend({
  beginDateReadable: Ember.computed('beginDate', function() {
    return moment(this.get('beginDate')).fromNow();
  }),
  submitDateReadable: Ember.computed('submitDate', function() {
    return moment(this.get('submitDate')).fromNow();
  })
});
