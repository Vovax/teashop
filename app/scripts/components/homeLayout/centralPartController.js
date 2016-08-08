'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    AuthView = require('./views/authView'),
    HomeLayoutView = require('./views/HomeLayoutView'),
    // Vent = require('../../Vent');
    SignInView = require('../authorizeLayout/views/SignInView');

module.exports = {

    showLayout: function() {
        App.regions = new AppLayoutView();
        this.homeLayoutView = new HomeLayoutView();
        App.regions.getRegion('centralRegion').show(this.homeLayoutView);
        this.showAuthContent();
    },

    showAuthContent: function() {
    	var authView = new AuthView();
    	this.homeLayoutView.showView(authView);
        authView.listenTo(authView, 'showSigninView', _.bind(this.showSigninView, this));

    },

    showSigninView: function() {
        this.SignInView = new SignInView();
        this.homeLayoutView.showView(this.SignInView);
        // App.regions.getRegion('centralRegion').show(this.SignInView);
    }






    // authenticate: function(auth) {
    //     var view;
    //     switch (auth) {
    //         case 'signin':
    //             view = new SignInView();
    //             this.homeLayoutView.listenTo(view, 'signin', _.bind(this.authenticate, this));
    //             break;
    //         case 'signup':
    //             view = new SignUpView();
    //         default:
    //     };
    //     this.mainRegion = view;
    //     this.homeLayoutView.openMainRegionView(view);
    //     this.homeLayoutView.listenTo(view, 'submitSignin', _.bind(this.submitSignin, this));
    // }

    // navigateToAuth: function() {
    //     this.homeLayoutView.$el.on('auth', _.bind(function() {
    //         App.trigger('viewChange', 'auth');
    //     }, this));
    // }


};
