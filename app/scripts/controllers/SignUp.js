'use strict';


angular.module('myworkApp')
    .controller('SignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if (!Activity.start_activity()) {
            $scope.show_which = "start";
        } else {
            judge_current_is_starting();
        }
        function judge_current_is_starting() {
            if (Activity.current_is_starting()) {
                $scope.show_which = "end";
            } else {
                $scope.show_which = "un_click";
                $scope.disabled = true;
            }
        }

        $scope.activity_list = function () {
            $location.path('/activity_list');
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
            }
        }


    });