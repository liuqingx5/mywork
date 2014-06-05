'use strict'

angular.module('myworkApp')
    .controller('BidListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        if (Bid.start_bid_or_activity() || Message.current_sign_up().length == 0) {
            $scope.which_show = "un_click";
            $scope.disabled = true;
        } else {
            $scope.which_show = "start";
        }

        $scope.current_bids = Bid.current_bid_lists();

        $scope.go_activity_list = function () {
            $location.path('/activity_list');
        }

        $scope.go_bid_sign = function () {
            Bid.save_bid();
            $location.path('/bid_sign')
        }

        $scope.bid_sign = function (bid) {
            Bid.save_current_bid(bid);
            $location.path('/bid_sign');
        }

        $scope.bid_yellow = function (starting_bid) {
            if (Bid.bid_background_yellow(starting_bid)) {
                return "start";
            }
        }

        $scope.go_sign_up = function () {
            if (!Bid.start_bid()) {
                $location.path('/sign_up');
            }
        }

    });