main.directive('lightTree', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {

        },
        templateUrl: '/custom/html/lighttree.html',
        controller: ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
            $scope.expandAll = function (isCollapse) {
                _.each($scope.NodesRoot, function (n) {
                    _.each(n.items, function (m) {
                        m.visible = isCollapse;
                    });
                });
            };

            $scope.changeExpandState = function (nodes) {
                _.each(nodes.items, function (n) {
                    n.visible = !n.visible;
                });
            };

            initialize();
        
            function initialize(){
                $scope.NodesRoot = createNodesList();
            }
            //#region Fixed List
            function createNodesList() {
                let root = [];
                for (var i = 0; i < 50; i++) {

                    let nodes = {id:i,title:'nodesContainerTitle'+i,items:[]};

                    for (var j = 0; j < 50; j++) {
                        let node = {
                            id: j,
                            title: 'node title' + j,
                            visible:false
                        }
                        nodes.items.push(node);
                    }
                    
                    root.push(nodes);
                }
                //var line = [{ id: 1, name: 11 }, { id: 2, name: 12 }, { id: 3, name: 13 }, { id: 4, name: 14 }, { id: 5, name: 15 }]
                //var model = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D' }, { id: 5, name: 'E' }]
                //for (var j = 0; j < 1000; j++) {
                //    var item = {
                //        id: j,
                //        firstName: line[Math.floor((Math.random() * 5))],
                //        lastName: model[Math.floor((Math.random() * 5))],
                //        nationality: { id: j, name: 'EQ' + j },
                //        education: { id: j, name: 'EQ' + j },
                //        visible: true,
                //    };
                //    $scope.collection.push(item);
                //};
                return root;
            }
            //#endregion Fixed List
        }],
    };
});
