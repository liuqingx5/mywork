'use strict'

angular.module('myworkApp')
    .controller('BidSignCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_bid_list=function (){
            $location.path('/bid_list');
        }


    });