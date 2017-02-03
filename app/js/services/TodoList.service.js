module.exports = function TaskService() {
    var self = this;

    var tasks = [
        {text: "Clean room", done: false}
    ];

    function init() {
     var tasksFromStorage = localStorage.getItem('tasks');

     if (!tasksFromStorage) {
        syncWithStorage();
     } else {
        tasks = JSON.parse(tasksFromStorage);
     }
     }

    function syncWithStorage() {
     localStorage.setItem('tasks', JSON.stringify(tasks));
     }

    self.getTasks = function () {
        return tasks;
    };

    self.addTask = function (taskName) {
        if (!taskName) {
            return 0;
        }
        else {
            tasks.push({text: taskName, done: false});
            syncWithStorage();
        }
    };


    self.getRemainingCount = function () {
        var remainingCount = 0;

        tasks.forEach(function(task) {
            remainingCount += task.done ? 0 : 1;
        });

        return remainingCount;
    };

    self.cleanMarkedTasks = function() {
        var arr = tasks;

        tasks = [];
        arr.forEach(function(task) {
            if (!task.done) tasks.push(task);
        });

        syncWithStorage();
        return tasks;
    };

    self.clearAllTasks = function() {
        tasks = [];
        syncWithStorage();
        return tasks;
    };

    self.ChangeTaskStatus = function () {
        tasks.done = !tasks.done;
        syncWithStorage();
    };

    init();
};