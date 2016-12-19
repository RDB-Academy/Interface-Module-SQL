import Ember from 'ember';

export default Ember.Controller.extend({
  catchError: function(_this) {
    return function(error) {
      _this.set('model.error', error.errors[0].detail);
    }
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
      this.model.save().catch(this.get('catchError')(this));
    },
    finishTaskTrial() {
      this.set("model.isFinished", true);
      let _this = this;
      return this.model.save().then(function() {
          _this.send("refreshModel");
      }).catch(this.get('catchError')(this));
    }
  }
});
