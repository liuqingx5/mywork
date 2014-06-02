'use strict'

angular.module('myworkApp')
    .controller('BidListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_activity_list = function () {
            $location.path('/activity_list');
        }

        $scope.go_bid_sign = function () {
            Bid.save_bid();
            $location.path('/bid_sign')
        }

        $scope.current_bids = Bid.current_bid_lists();

        $scope.bid_sign = function (bid) {
            Bid.save_current_bid(bid);
            $location.path('/bid_sign');
        }


    });