import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  userStatement: "SELECT ... FROM ... ;",
  taskTrialStatus: {
    beginDate: new Date()
  },
  isFinished: false,
  afterCreate(tasktrial, server) {
    tasktrial.task = server.create('task');
    tasktrial.save();
  }
});
