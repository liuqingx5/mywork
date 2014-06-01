'use strict';


angular.module('myworkApp')
    .controller('SignUpCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.activity_list = function () {
            $location.path('/activity_list');
        }


    });