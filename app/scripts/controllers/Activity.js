'use strict';


angular.module('myworkApp')
    .controller('ActivityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_activity_list = function () {
            $location.path('/activity_list');
        }

        $scope.go_sign_up = function () {
            $location.path('/sign_up');
        }


    });