import Ember from 'ember';

export default Ember.Controller.extend({
  userStatement: Ember.computed(function() {
     if(this.get('model.userStatement')) {
       return this.get('model.userStatement');
     }
     return "";
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
