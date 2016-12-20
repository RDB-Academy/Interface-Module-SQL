import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  userStatement: "SELECT ... FROM ... ;",
  isFinished: false,
  stats: {
    beginDate: new Date()
  },
  afterCreate(tasktrial, server) {
    tasktrial.task = server.create('task');
    tasktrial.save();
  }
});
