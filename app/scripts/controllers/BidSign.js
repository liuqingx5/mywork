'use strict'

angular.module('myworkApp')
    .controller('BidSignCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var bid_status = {
            'start': function () {
                $scope.which_button = "end";
            },
            'end': function () {
                $scope.which_button = "un_click_end";
                $scope.disabled_end = true;
            },
            'un_start': function () {
                judge_is_start_bid_activity();
            }
        }

        bid_status[Bid.current_bid().status]();

        function judge_is_start_bid_activity() {
            if (!Bid.start_bid_or_activity()) {
                $scope.which_button = "start";
                return;
            }
            $scope.which_button = "un_click_start";
            $scope.disabled_start = true;
        }

        $scope.go_bid_list = function () {
            $location.path('/bid_list');
        }

        $scope.begin = function () {
            $scope.which_button = "end";
            Bid.change_status("start");
            Bid.save_start();
        }

        $scope.end = function () {
            if (confirm('确定要结束本次竞价吗？')) {
                Bid.change_status("end");
                Bid.clear_start();
                $location.path('/bid_result')
            }
        }

        $scope.refresh = function () {
            $scope.currents = BidMessage.search_current();
            $scope.counter = BidMessage.search_current().length;
            $scope.page_head = Bid.current_bid().name;
        }
        $scope.refresh();


    });