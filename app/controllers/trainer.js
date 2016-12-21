import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * Keeps track of the displayment of the stats in the result-correct-display
   */
  statsDisplayed: true,
  displayStats: Ember.computed('model.isCorrect', 'statsDisplayed', {
    get() {
      return this.get('model.isCorrect') && this.get('statsDisplayed');
    },
    set(key, val) {
      this.set('statsDisplayed', val);
      return val;
    }
  }),
  /**
   * Incorrect Requests, that do not serve a 400 will set resultSet.errorMessage
   */
  findErrors: function(result) {
    if (result.get('resultSet.errorMessage')) {
      throw result.get('resultSet');
    }
  },
  /**
   * Retrieves the different Error Messages from the different Error types
   */
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
    /**
     * PATCHing a non-finished tasktrial will produce a resultSet or an errorMessage
     */
    submitStatement(userStatement) {
      this.set('model.error', null);
      this.model.userStatement = userStatement;
      this.model.save().then(this.get('findErrors')).catch(this.get('catchError')(this));
    },
    /**
     * PATCHing a finished tasktrial will deliver a new tasktrial on next POST.
     * Hence refreshing the model to create a new tasktrial.
     */
    finishTaskTrial() {
      this.set('statsDisplayed', false);
      this.set("model.isFinished", true);
      let _this = this;
      this.model.save().then(function() {
        return _this.send("refreshModel", function() {
          _this.set("statsDisplayed", true);
        });
      }).catch(this.get('catchError')(this));
    },
    showStatsModal() {
      this.set('statsDisplayed', true);
    }
  }
});
