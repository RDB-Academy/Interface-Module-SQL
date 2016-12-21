import Ember from 'ember';

export default Ember.Controller.extend({
  statsDisplayed: false,
  displayStats: Ember.computed('model.isCorrect', 'model.isFinished', 'statsDisplayed', {
    get(key) {
      return this.get('model.isCorrect') && !this.get('model.isFinished');
    },
    set(key, val) {
      this.set('statsDisplayed', val);
      return val;
    }
  }),
  findErrors: function(result) {
    if (result.get('resultSet.errorMessage')) {
      throw result.get('resultSet');
    }
  },
  catchError: function(_this) {
    return function(error) {
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
  actions:{
    submitStatement(userStatement) {
      let _this = this;
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
    },
    showStatsModal() {
      this.set('statsDisplayed', true);
    }
  }
});
