import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  beginDate: new Date(),
  userStatement: "SELECT ... FROM ... ;",
  isFinished: false,
  afterCreate(tasktrial, server) {
    tasktrial.task = server.create('task');
    tasktrial.save();
  }
});
