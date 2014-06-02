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
            .when('/bid_list', {
                templateUrl: 'views/bid_list.html',
                controller: 'BidListCtrl'
            })
            .when('/bid_result', {
                templateUrl: 'views/bid_result.html',
                controller: 'BidResultCtrl'
            })
            .when('/bid_sign', {
                templateUrl: 'views/bid_sign.html',
                controller: 'BidSignCtrl'
            })
            .when('/price_count', {
                templateUrl: 'views/price_count.html',
                controller: 'PriceCountCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
