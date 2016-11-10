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
  this.urlPrefix = 'http://localhost:4200';

  this.get('/tasks', (schema) => {
    return schema.tasks.all();
  });

  this.get('/tasks/:id', (schema, request) => {
    return schema.tasks.find(request.params.id);
  });

  this.get('/relations/:id', (schema, request) => {
    return schema.relations.find(request.params.id);
  });

  this.get('/relations', (schema) => {
    return schema.relations.all().models;
  });

  this.get('/columns/:id',  (schema, request) => {
    return schema.columns.find(request.params.id);
  });

  this.get('/columns', (schema) => {
    return schema.columns.all().models;
  });

  this.patch('/tasks/:id', (schema, request) => {
    let statement = JSON.parse(request.requestBody).userStatement;
    let task = schema.tasks.find(request.params.id);
    task.attrs.userStatement = statement;
    if (statement.trim() != "") {
      task.attrs.resultSet = {
        header:['id', 'Email', 'Name'],
        datasets:[
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
      task.attrs.resultSet = null;
    }
    return task;
  });

}
