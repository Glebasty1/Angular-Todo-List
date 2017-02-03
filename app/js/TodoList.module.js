(function () {

//require controller and service for our component
var TodoCtrl = require('../js/controllers/TodoList.controller');
var TaskService = require('../js/services/TodoList.service');

//creating new module
  angular.module('TodoList',[])
      //creating component todoList
      .component("todoList", {
        restrict: 'E',
          //connect template for our component
        templateUrl: '/templates/todo-list.template.html',
        controller: ['$scope', 'TaskService', TodoCtrl]
      })
      //creating TaskService
      .service('TaskService', TaskService);

}());
