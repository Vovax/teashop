'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    AuthView = require('./views/signInView'),
    HomeLayoutView = require('./views/HomeLayoutView');

module.exports = {

    showLayout: function() {
        App.regions = new AppLayoutView();
        this.homeLayoutView = new HomeLayoutView();
        App.regions.getRegion('centralRegion').show(this.homeLayoutView);
        this.showMainContent();
    },

    showMainContent: function() {
    	var signInView = new SignInView();
    	this.homeLayoutView.showSignInView(signInView);

    },
};
