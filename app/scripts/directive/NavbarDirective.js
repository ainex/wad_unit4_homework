(function () {
    'use strict';

    var navbarDirectiveFactory = function () {
        return {
            scope: false,
            restrict: 'E',
            templateUrl: 'views/partial/NavbarDirective.html',
            controllerAs: 'cmp',
            controller: ['$scope', '$location', '$route', function ($scope, $location, $route) {
                //$scope.cmp = this;

                this.search = function () {
                    $location.path('/search').search({title: this.productTitle});
                    this.productTitle = null;

                    //force reloading: property 'reloadOnSearch: false' in app
                    $route.reload();
                };
            }]
        };
    };

    angular.module('auction').directive('auctionNavbar', navbarDirectiveFactory);
}());
