import Ember from 'ember';

export default Ember.Controller.extend({
  catchError: function(_this) {
    return function(error) {
      console.log(error);
      if (error.errors) {
        _this.set('model.error', {
          message: error.errors[0].detail,
          color: "danger"
        });
      } else {
        if (error.message) {
          _this.set('model.error', {
            message: error.message,
            color: "danger"
          });
        }
        if (error.errorMessage) {
          _this.set('model.error', {
            message: error.errorMessage,
            color: "warning"
          });
        }
      }
    };
  },
  findErrors: function(result) {
    if (result.get('resultSet.errorMessage')) {
      throw result.get('resultSet');
    }
  },
  actions:{
    submitStatement(userStatement) {
      this.set('model.error', null);
      this.model.userStatement = userStatement;
      this.model.save().then(this.get('findErrors')).catch(this.get('catchError')(this));
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
