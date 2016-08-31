'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    User = require('../../models/user'),
    HomeLayoutView = require('../homeLayout/views/HomeLayoutView'),
    ProductGalleryView = require('../productLayout/views/ProductGalleryView');

module.exports = {

	showLayout: function() {
        App.regions = new AppLayoutView();
        this.productGalleryView = new ProductGalleryView();
        debugger;
    	App.regions.getRegion('centralRegion').show(this.productGalleryView);
    },

    showProductGalleryView: function() {

    }
};
