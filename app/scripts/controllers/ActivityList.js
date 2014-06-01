'use strict';

angular.module('myworkApp')
    .controller('ActivityListCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_create_activity=function(){
            $location.path('/');
        }
        $scope.activities =Activity.activities();



    });