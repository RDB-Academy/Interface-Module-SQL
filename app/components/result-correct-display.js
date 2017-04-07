import Ember from 'ember';
/**
 * Injected Parameters:
 *   createdAt
 *   submittedAt
 *   tries
 *   displayStats - boolean - controls modal displayment
 *   onNewTask
 */
export default Ember.Component.extend({
  createdAtReadable: Ember.computed('createdAt', function() {
    return moment(this.get('createdAt')).fromNow();
  }),
  submittedAtReadable: Ember.computed('stats.submittedAt', function() {
    return moment(this.get('stats.submittedAt')).fromNow();
  }),
  timeNeeded: Ember.computed('stats.submittedAt', 'createdAt', function() {
    return moment(this.get('stats.submittedAt')).from(this.get('createdAt'), true);
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
