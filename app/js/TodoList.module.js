(function () {

var TodoCtrl = require('../js/controllers/TodoList.controller');
var TaskService = require('../js/services/TodoList.service');

  angular.module('TodoList',[])
      .component("todoList", {
        templateUrl: '/templates/todo-list.template.html',
        controller: ['$scope', 'TaskService', TodoCtrl]
      })
      .service('TaskService', TaskService);

}());
