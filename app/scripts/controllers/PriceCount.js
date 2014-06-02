'use strict'

angular.module('myworkApp')
    .controller('PriceCountCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_bid_list = function () {
            $location.path('/bid_list');
        }

        $scope.go_bid_result = function () {
            $location.path('/bid_result');
        }


    });