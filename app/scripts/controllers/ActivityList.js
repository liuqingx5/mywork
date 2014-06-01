'use strict';

angular.module('myworkApp')
    .controller('ActivityListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_create_activity = function () {
            $location.path('/');
        }
        $scope.activities = Activity.activities();

        $scope.sign_up = function (activity) {
            Activity.save_current_activity(activity);
            $location.path('/sign_up');
        }

        if (Activity.start_activity()) {
            $scope.disabled = true;
        }

        $scope.activity_yellow = function (activity) {
            if (Activity.background_yellow(activity)) {
                return "start";
            }
        }


    });