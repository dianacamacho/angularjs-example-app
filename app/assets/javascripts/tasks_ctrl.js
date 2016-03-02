(function() {
  "use strict";

  angular.module("app").controller("tasksCtrl", function($scope){
    
    $scope.tasks = ["study", "get dinner", "sleep"];

    $scope.addTask = function(task) {
      if(task) {
        $scope.tasks.push(task);
        $scope.newTask = null;
      }

    }; 
    $scope.completeTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    window.scope = $scope;
  });

}());