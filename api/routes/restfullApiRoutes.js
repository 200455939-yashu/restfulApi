'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/restfullApiController');

  // Restful API Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)//This the router to call to fetch all the tasks records
    .post(todoList.create_a_task);//To create a perticular record inside the tasks collection


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task) //will fetch only one record
    .put(todoList.update_a_task)// will update perticualr record
    .delete(todoList.delete_a_task);// will delete a perticular record
};