'use strict';

angular
    .module('myworkApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/activity.html',
                controller: 'ActivityCtrl'
            })
            .when('/activity_list', {
                templateUrl: 'views/activity_list.html',
                controller: 'ActivityListCtrl'
            })
            .when('/sign_up', {
                templateUrl: 'views/sign_up.html',
                controller: 'SignUpCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
