'use strict'

angular.module('myworkApp')
    .controller('BidSignCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_bid_list = function () {
            $location.path('/bid_list');
        }
        $scope.which_button = "start";

        $scope.begin = function () {
            $scope.which_button = "end";
            Bid.change_status("start");
            Bid.save_start();
        }

        $scope.end = function () {
            if (confirm('确定要结束本次竞价吗？')) {
                Bid.change_status("end");
                Bid.clear_start();
            }
        }


    });