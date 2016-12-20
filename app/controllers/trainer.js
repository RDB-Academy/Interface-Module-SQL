import Ember from 'ember';

export default Ember.Controller.extend({
  catchError: function(_this) {
    return function(error) {
      if (error.errors) {
        _this.set('model.error', {
          message: error.errors[0].detail,
          color: "danger"
        });
      } else if (error.message) {
        _this.set('model.error', {
          message: error.message,
          color: "warning"
        });
      }
    };
  },
  findErrors: function(result) {
    if (result.get('resultSet.errorMessage')) {
      throw new Ember.Error(result.get('resultSet.errorMessage'));
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
      this.model.save().then(this.get('findErrors')).catch(this.get('catchError')(this));
    },
    finishTaskTrial() {
      this.set("model.isFinished", true);
      let _this = this;
      return this.model.save().then(this.get('findErrors')).then(function() {
        _this.send("refreshModel");
      }).catch(this.get('catchError')(this));
    }
  }
});
