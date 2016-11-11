import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(tasktrial, server) {
    tasktrial.task = server.create('task');
    tasktrial.save();
  }
});
