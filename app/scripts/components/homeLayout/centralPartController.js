'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    AuthView = require('./views/authView'),
    HomeLayoutView = require('./views/HomeLayoutView'),
    // Vent = require('../../Vent');
    SignInView = require('../authorizeLayout/views/SignInView'),
    SignUpView = require('../authorizeLayout/views/SignUpView'),
<<<<<<< HEAD
    ForgotPassView = require('../authorizeLayout/views/ForgotPassView'),
    SentPassView = require('../authorizeLayout/views/SentPassView');
=======
    ForgotPassView = require('../authorizeLayout/views/ForgotPassView');
>>>>>>> feat-auth

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
<<<<<<< HEAD
=======
        // App.regions.getRegion('centralRegion').show(this.SignInView);
>>>>>>> feat-auth
        this.SignInView.listenTo(this.SignInView, 'showSignUpView', _.bind(this.showSignUpView, this));
        this.SignInView.listenTo(this.SignInView, 'showForgotPassView', _.bind(this.showForgotPassView, this));
    },

    showSignUpView: function() {
        this.SignUpView = new SignUpView();
        this.homeLayoutView.showView(this.SignUpView);
        this.SignUpView.listenTo(this.SignUpView, 'showSignInView', _.bind(this.showSignInView, this));
<<<<<<< HEAD
        // App.regions.getRegion('centralRegion').show(this.SignUpView);
    },

    showForgotPassView: function() {
        this.ForgotPassView = new ForgotPassView();
        this.homeLayoutView.showView(this.ForgotPassView);
        this.ForgotPassView.listenTo(this.ForgotPassView, 'showSentPassView', _.bind(this.showSentPassView, this));
    },

    showSentPassView: function() {
        this.SentPassView = new SentPassView();
        this.homeLayoutView.showView(this.SentPassView);
=======
    },
    showForgotPassView: function() {
        this.ForgotPassView = new ForgotPassView();
        this.homeLayoutView.showView(this.ForgotPassView);
        // this.ForgotPassView.listenTo(this.ForgotPassView, 'showSignInView', _.bind(this.showSignInView, this));
>>>>>>> feat-auth
    }
};
