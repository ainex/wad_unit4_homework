/**
 * Created by ainex on 21.12.2014.
 */
(function () {
    'use strict';
    var SearchFormService = function () {
        // Instance attributes go here:
    };
    var DEFAULTS = {
        bids: null,
        category: 0,
        closeDay: null,
        highPrice: 500,
        lowPrice: 0,
        title: ''
    };

    var cleanUp = function (obj) {
        return _.reduce(obj, function (params, value, key) {
            if (key.indexOf('_') === 0) {
                key = key.substring(1);
            }
            if (_.isString(value) && _.isEmpty(value.trim())) {
                return params;
            }
            if (!_.isNull(value) && !_.isNaN(value) && value !== DEFAULTS[key]) {
                params[key] = value;
            }
            return params;

        }, {})
    };

    SearchFormService.prototype ={
        get lowPrice() {return this._lowPrice;},
        set lowPrice(price){
            this._lowPrice = parseFloat(price);
        },
        get highPrice() {return this._highPrice;},
        set highPrice(price){
            this._highPrice = parseFloat(price);
        },
        get category() {return this._category;},
        set category(value){
            console.log(value);
            this._category = parseInt(value);
        },

        toRequestParams: function (){
            return cleanUp(this);
        },

        fromRequestParams: function (params){
            var cleanedUpParams = cleanUp(params);
            _.assign(this, cleanedUpParams);
            return cleanedUpParams;
        }

    };

    SearchFormService.$inject = [];

    // Register the service within AngularJS DI container.
    angular.module('auction').service('SearchFormService', SearchFormService);
}());