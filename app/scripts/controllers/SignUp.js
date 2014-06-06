'use strict';

angular.module('myworkApp')
    .controller('SignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var activity_status = {
            'start': function () {
                $scope.show_which = "end";
            },
            'un_start': function () {
                judge_starting();
            },
            'end': function () {
                judge_starting();
            }
        }

        activity_status[Activity.current().status]();

        function judge_starting() {
            if (Bid.start_bid_or_activity()) {
                $scope.show_which = "un_click";
                $scope.disabled = true;
                return;
            }
            $scope.show_which = "start";
        }

        $scope.activity_list = function () {
            $location.path('/activity_list');
        }

        $scope.go_bid_list = function () {
            $location.path('/bid_list');
        }

        $scope.switch_end = function () {
            $scope.show_which = "end";
            Activity.change_status("start");
            Activity.save_start_activity(Activity.current().activity);
        }

        $scope.switch_start = function () {
            if (confirm("确定要结束本次报名吗？")) {
                $scope.show_which = "start";
                Activity.change_status("end");
                Activity.clear_start_activity();
                $location.path('/bid_list');
            }
        }

        $scope.refresh = function () {
            $scope.currents = Message.current_sign_up();
            $scope.counter = Message.current_sign_up().length;
        }
        $scope.refresh();

    });