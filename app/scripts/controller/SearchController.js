(function () {
    'use strict';

    var SearchController = function ($location, productService, searchFormService) {
        var _this = this;
        this.$location = $location;
        this.productService = productService;
        this.searchFormService = searchFormService;

        productService.find()
            .then(function (data) {
                _this.products = data;
            });
    };

    SearchController.$inject = [
        '$location',
        'ProductService',
        'SearchFormService'];
    angular.module('auction').controller('SearchController', SearchController);
}());
