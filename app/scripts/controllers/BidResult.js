'use strict'

angular.module('myworkApp')
    .controller('BidResultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_bid_list = function () {
            $location.path('/bid_list');
        }
        $scope.go_price_count = function () {
            $location.path('/price_count');
        }


    });