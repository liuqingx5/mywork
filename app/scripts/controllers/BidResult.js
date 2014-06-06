'use strict'

angular.module('myworkApp')
    .controller('BidResultCtrl', function ($scope, $location, $timeout) {
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

        $scope.results = BidMessage.results();
        $scope.counter = BidMessage.search_current().length;
        $scope.page_head = Bid.current_bid().name;

        if (BidMessage.success_bid()) {
            $scope.bid_success = BidMessage.success_bid();
            $timeout(function () {
                $('#ModalSuccess').modal("show");
                $timeout(function () {
                    $('#ModalSuccess').modal('hide');
                    $scope.success = true;
                }, 3000)
            }, 1)
        }
        if (!BidMessage.success_bid()) {
            $timeout(function () {
                $('#ModalFail').modal("show");
                $timeout(function () {
                    $('#ModalFail').modal("hide");
                    $scope.fail = true;
                }, 3000)
            }, 1)
        }


    });