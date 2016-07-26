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
  this.urlPrefix = 'http://localhost:8080';

  /*this.get('/tasks', function() {
    return {
      data: [
        {
          type: 'tasks',
          id: 1,
          attributes: {
            'task-text': "Select bla from x",
          },
          relationships: {
            relations: {
              data : [
                {
                  type: 'relations',
                  id: 2,
                }
              ]
            }
          }
        }
      ],
      included: [
        {
          id: 2,
          type: 'relations',
          attributes: {
            name: 'User'
          },
          relationships: {
            columns: {
              data: [
                {
                  type: 'columns',
                  id: 1
                },
                {
                  type: 'columns',
                  id: 2
                }
              ]
            }
          }
        },
        {
          id: 1,
          type: 'columns',
          attributes: {
            name: 'Username',
            type: 'VARCHAR(256)'
          }
        },
        {
          id: 2,
          type: 'columns',
          attributes: {
            name: 'email',
            type: 'VARCHAR(256)'
          }
        }
      ]
    };
  });
*/

  this.get('/tasks', (schema) => {
    return schema.tasks.all();
  });

  this.get('/relation/:id', (schema, request) => {
    return schema.relations.find(id);
  });

  this.get('/relations', (schema) => {
    return schema.relations.all().models;
  })

  this.get('/column/:id',  (schema, request) => {
    return schema.columns.find(id);
  });

  this.get('/columns', (schema) => {
    return schema.columns.all().models;
  });


}
