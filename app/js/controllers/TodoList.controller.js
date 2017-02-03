module.exports = function TodoCtrl($scope, TaskService) {
    $scope.taskList = TaskService.getTasks();
    $scope.taskName = null;

    //method for adding tasks to our taskList
    $scope.addTask = function (taskName) {
        TaskService.addTask(taskName);
        $scope.taskName = null;
    };

    //method for deleting all tasks from taskList
    $scope.clearAllTasks = function () {
        $scope.taskList = TaskService.clearAllTasks();
    };

    //method for deleting tasks which already complited
    $scope.cleanMarkedTasks = function () {
        $scope.taskList = TaskService.cleanMarkedTasks();
    };

    //method for counting how muck tasks left
    $scope.remainingTasks = function () {
        return TaskService.getRemainingCount();
    };

    //method for changing tasks status
    $scope.ChangeTaskStatus = function () {
      return TaskService.ChangeTaskStatus();
    };
};