import Ember from 'ember';

export default Ember.Controller.extend({
  userStatement:'SELECT p.Name, u.solvedStatements FROM User AS u \n\t JOIN Profile AS p \n\t ON p.id = u.profile \n\t WHERE u.solvedStatements > 30 \nORDER BY u.solvedStatements ASC;',
  actions:{
    submitStatement(userStatement) {
      this.model.userStatement = userStatement;
      this.model.save();
    }
  }
});
