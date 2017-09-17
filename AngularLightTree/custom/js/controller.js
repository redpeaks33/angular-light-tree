var main = angular.module("app", ['ui.tree']);

main.controller('MyController', ['$scope', function ($scope) {
    $scope.initialize = function()
    {
    };

    $scope.changeEditMode = function () {
        $scope.$broadcast('changeEditMode');
    };
}]);
