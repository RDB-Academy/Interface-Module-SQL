import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  userStatement: "SELECT ;",
  afterCreate(tasktrial, server) {
    tasktrial.task = server.create('task');
    tasktrial.save();
  }
});
