'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    AuthView = require('./views/authView'),
    HomeLayoutView = require('./views/HomeLayoutView'),
    // Vent = require('../../Vent');
    SignInView = require('../authorizeLayout/views/SignInView'),
    SignUpView = require('../authorizeLayout/views/SignUpView'),
    ForgotPassView = require('../authorizeLayout/views/ForgotPassView');

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
        authView.listenTo(authView, 'showSignInView', _.bind(this.showSignInView, this));
        authView.listenTo(authView, 'showSignUpView', _.bind(this.showSignUpView, this));

    },

    showSignInView: function() {
        this.SignInView = new SignInView();
        this.homeLayoutView.showView(this.SignInView);
        // App.regions.getRegion('centralRegion').show(this.SignInView);
        this.SignInView.listenTo(this.SignInView, 'showSignUpView', _.bind(this.showSignUpView, this));
        this.SignInView.listenTo(this.SignInView, 'showForgotPassView', _.bind(this.showForgotPassView, this));
    },

    showSignUpView: function() {
        this.SignUpView = new SignUpView();
        this.homeLayoutView.showView(this.SignUpView);
        this.SignUpView.listenTo(this.SignUpView, 'showSignInView', _.bind(this.showSignInView, this));
    },
    showForgotPassView: function() {
        this.ForgotPassView = new ForgotPassView();
        this.homeLayoutView.showView(this.ForgotPassView);
        // this.ForgotPassView.listenTo(this.ForgotPassView, 'showSignInView', _.bind(this.showSignInView, this));
    }
};
