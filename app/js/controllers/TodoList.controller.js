module.exports = function TodoCtrl($scope, TaskService) {
    $scope.taskList = TaskService.getTasks();
    $scope.taskName = null;

    $scope.addTask = function (taskName) {
        TaskService.addTask(taskName);
        $scope.taskName = null;
    };

    $scope.clearAllTasks = function () {
        $scope.taskList = TaskService.clearAllTasks();
    };

    $scope.cleanMarkedTasks = function () {
        $scope.taskList = TaskService.cleanMarkedTasks();
    };

    $scope.remainingTasks = function () {
        return TaskService.getRemainingCount();
    };

    $scope.ChangeTaskStatus = function () {
      return TaskService.ChangeTaskStatus();
    };
};