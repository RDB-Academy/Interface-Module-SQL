import Mirage from 'ember-cli-mirage';
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.urlPrefix = 'http://localhost:4200/api';

  this.get('/tasks', (schema) => {
    return schema.tasks.all();
  });

  this.get('/tasks/:id', (schema, request) => {
    return schema.tasks.find(request.params.id);
  });

  this.get('/schema-defs', (schema) => {
    return schema.schemaDefs.all();
  });

  this.get('/schema-defs/:id', (schema, request) => {
    return schema.schemaDefs.find(request.params.id);
  });

  this.get('/table-defs/:id', (schema, request) => {
    return schema.tableDefs.find(request.params.id);
  });

  this.get('/table-defs', (schema) => {
    return schema.tableDefs.all().models;
  });

  this.get('/column-defs/:id', (schema, request) => {
    return schema.columnDefs.find(request.params.id);
  });

  this.get('/column-defs', (schema) => {
    return schema.columnDefs.all().models;
  });

  this.get('/task-trials/:id', (schema, request) => {
    let taskTrial = schema.taskTrials.find(request.params.id);
    if (taskTrial == null) {
      return new Mirage.Response(400, { a: 'header' }, { errors: [{detail:'No Task yeeet'}] });
    }
    return taskTrial;
  });

  this.patch('/task-trials/:id', (schema, request) => {
    let requestParams = JSON.parse(request.requestBody);
    let statement = requestParams.userStatement;
    let isFinished = requestParams.isFinished;
    let taskTrial = schema.taskTrials.find(request.params.id);

    taskTrial.attrs.stats.submitDate = new Date();
    taskTrial.attrs.isFinished = isFinished;
    taskTrial.attrs.userStatement = statement;
    if (statement.trim() !== "") {
      taskTrial.attrs.resultSet = {
        header:['id', 'Email', 'Name'],
        dataSets:[
          [
            0,
            "b@de.de",
            "Noone"
          ],[
            1,
            "b2@de.de",
            "Noone2"
          ]
        ]
      };
    } else {
      taskTrial.attrs.resultSet = null;
    }
    if (Math.random() < 0.2) {
      taskTrial.attrs.isCorrect = true;
      taskTrial.attrs.stats.tries = Math.floor(Math.random() * 10);
    }
    taskTrial.save();
    return taskTrial;
  });

  this.post('/task-trials', () => {
    return this.create('taskTrial');
  });

  this.get('/foreign-keys/:id', (schema, request) => {
    return schema.foreignKeys.find(request.params.id);
  });

  this.get('/foreign-key-relations/:id', (schema, request) => {
    return schema.foreignKeyRelations.find(request.params.id);
  });
}
