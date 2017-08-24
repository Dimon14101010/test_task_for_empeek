;(function(){

    "use strict";

    angular
        .module("myApp")

        .controller("DashboardCtrl", function($scope) {

            $scope.items = ['First item with custom name'];
            $scope.comments = ['TEST TEXT \nTEST SECOND ROW'];
            $scope.createItems = function () {
                if ($scope.item) {
                    $scope.items.push(this.item);
                    $scope.item = '';
                }

            };
            $scope.createComments = function () {
                if(event.keyCode==10) {
                    console.log('works')
                    if ($scope.comment) {
                        $scope.comments.push(this.comment);
                        $scope.comment = '';
                    }
                }
            }

        })
})();