var app = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http, $sampleService) {
        var employees;
        $sampleService.getUsers().then(function(d) {
            $scope.employees = d;
        });
        $scope.sortColumn = "userId";
        $scope.reverseSort = false;
        $scope.sortData = function(column) {
            $scope.reverseSort = ($scope.sortColumn == column) ?
                !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function(column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ?
                    'arrow-down' : 'arrow-up';
            }
            return '';
        }
    });
    app.directive("myDirective",function(){
        return{


            templateUrl:'template.html',
            // scope : {
            //     data : '='
            // },
            restrict : 'E',
            transclude : true,
            controller: function ($scope) {
            console.log($scope)
            }
        }
    })
