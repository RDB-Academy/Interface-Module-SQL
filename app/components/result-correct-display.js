import Ember from 'ember';

export default Ember.Component.extend({
  beginDateReadable: Ember.computed('beginDate', function() {
    return moment(this.get('beginDate')).fromNow();
  }),
  submitDateReadable: Ember.computed('submitDate', function() {
    return moment(this.get('submitDate')).fromNow();
  }),
  showModal: Ember.observer('displayStats', function() {
    if (this.get('displayStats')) {
      this.$('#result-correct-display-modal').modal();
    }
  }),
  didInsertElement() {
    console.log(this.get('displayStats'));
    let _this = this;
    this.$('#result-correct-display-modal').on('hide.bs.modal', function() {
      _this.set('displayStats', false)
    })
  },
  actions: {
    newTask() {
      this.$('#result-correct-display-modal').modal('hide');
      return this.get('onNewTask')();
    }
  }
});
