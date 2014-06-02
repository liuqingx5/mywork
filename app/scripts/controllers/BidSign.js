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

        button_status();
        function button_status() {
            var current_bid = Bid.current_bid();
            console.log('wwwww', current_bid)
            if (current_bid.status == "start") {
                console.log('aaaaaaaaaaaaaaaaaaaaa')
                $scope.which_button = "end";
                return;
            }
            if (current_bid.status == "end") {
                console.log('dgdfffffffffhjkl')
                $scope.which_button = "un_click_end";
                $scope.disabled_end = true;
                return;
            }
            if (current_bid.status == "un_start") {
                judge_is_start_bid_activity();
            }
        }

        function judge_is_start_bid_activity() {
            if (!Bid.start_bid_activity()) {
                $scope.which_button = "start";
                return;
            } else {
                $scope.which_button = "un_click_start";
                $scope.disabled_start = true;
                return;
            }
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
            }
        }


    });