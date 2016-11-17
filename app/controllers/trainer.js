import Ember from 'ember';

export default Ember.Controller.extend({
  userStatement: Ember.computed(function() {
    return this.get('model').get('userStatement');
  }),
  actions:{
    submitStatement(userStatement) {
      this.model.userStatement = userStatement;
      this.model.save().catch((error) => {
        this.transitionToRoute('error', error);
      });
    }
  }
});
