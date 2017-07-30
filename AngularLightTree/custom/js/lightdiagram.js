main.directive('lightDiagram', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {

        },
        templateUrl: '/custom/html/lightdiagram.html',
        controller: ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
            alert();
        }],
    };
});