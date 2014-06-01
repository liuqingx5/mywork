'use strict';


angular.module('myworkApp')
    .controller('ActivityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.input_activity = '';
        $scope.go_activity_list = function () {
            $location.path('/activity_list');
        }

        $scope.go_sign_up = function () {
            if ($scope.input_activity) {
                repeat_activity();
            }
        }

        function repeat_activity() {
            var input_name=$scope.input_activity;
            console.log('ss',input_name)
            console.log('aaa',Activity.judge_repeat_activity(input_name))
            if (!Activity.judge_repeat_activity(input_name)) {
                var activity = new Activity(input_name);
                activity.save_activity(activity);
                Activity.save_current_activity(activity.activity)
                $location.path('/sign_up');
                return;
            } else {
                $scope.repeat = true;
                return;
            }
        }

        if (!Activity.activities().length) {
            $scope.show = false;
        } else {
            $scope.show = true;
        }


    });