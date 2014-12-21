/**
 * Created by ainex on 21.12.2014.
 */
(function () {
    'use strict';
    var SearchFormService = function () {
        // Instance attributes go here:

    };
    var DEFAULTS ={
        bids: null,
        category: 0,
        closeDay: null,
        highPrice: 500,
        lowPrice: 0,
        title: ''
    };

    // Register the service within AngularJS DI container.
    angular.module('auction').service('SearchFormService', SearchFormService);
}());