import Ember from 'ember';

export default Ember.Controller.extend({
  catchError: function(error) {
    console.log(error.errors[0].detail);
    _this.set('model.error', error.errors[0].detail);
  },
  userStatement: Ember.computed(function() {
     if(this.get('model.userStatement')) {
       return this.get('model.userStatement');
     }
     return "";
  }),
  actions:{
    submitStatement(userStatement) {
      this.set('model.error', null);
      this.model.userStatement = userStatement;
      let _this = this;
      this.model.save().catch(this.catchError);
    },
    finishTaskTrial() {
      this.set("model.ifFinished", true);
      let _this = this;
      return this.model.save().catch(this.catchError).then(function() {
          _this.send("refreshModel");
      });
    }
  }
});
