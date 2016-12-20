import Ember from 'ember';

export default Ember.Component.extend({
  beginDateReadable: Ember.computed('beginDate', function() {
    console.log(this.get('beginDate'));
    return moment(this.get('beginDate')).fromNow();
  }),
  submitDateReadable: Ember.computed('submitDate', function() {
    return moment(this.get('submitDate')).fromNow();
  })
});
