import Ember from 'ember';

export default Ember.Controller.extend({
  userStatement:'asdasd',
  actions:{
    submitStatement(userStatement) {
      this.model.userStatement = userStatement;
      this.model.save();
    }
  }
});
