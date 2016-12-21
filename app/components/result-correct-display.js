import Ember from 'ember';
/**
 * Injected Parameters:
 *   beginDate
 *   submitDate
 *   tries
 *   displayStats - boolean - controls modal displayment
 *   onNewTask
 */
export default Ember.Component.extend({
  beginDateReadable: Ember.computed('beginDate', function() {
    return moment(this.get('beginDate')).fromNow();
  }),
  submitDateReadable: Ember.computed('submitDate', function() {
    return moment(this.get('submitDate')).fromNow();
  }),
  timeNeeded: Ember.computed('submitDate', 'beginDate', function() {
    return moment(this.get('submitDate')).from(this.get('beginDate'), true);
  }),
  showModal: Ember.observer('displayStats', function() {
    if (this.get('displayStats')) {
      this.$('#result-correct-display-modal').modal();
    }
  }),
  didInsertElement() {
    let _this = this;
    /* notice parent controller of the closing modal,
     * so it can reopen the modal by resetting the 'displayStats' option
     */
    this.$('#result-correct-display-modal').on('hide.bs.modal', function() {
      _this.set('displayStats', false);
    });
  },
  actions: {
    newTask() {
      this.$('#result-correct-display-modal').modal('hide');
      return this.get('onNewTask')();
    }
  }
});
