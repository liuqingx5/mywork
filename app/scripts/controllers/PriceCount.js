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

        $scope.counts = BidMessage.counts();
        $scope.counter = BidMessage.search_current().length;
        $scope.page_head = Bid.current_bid().name;

        if (BidMessage.success_bid()) {
            $scope.bid_success = BidMessage.success_bid();
            $scope.success = true;
        } else {
            $scope.fail = true;
        }


    });