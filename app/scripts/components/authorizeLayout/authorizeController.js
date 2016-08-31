'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    AuthView = require('../homeLayout/views/authView'),
    SignInView = require('./views/SignInView'),
    SignUpView = require('./views/SignUpView'),
    // ForgotPassView =require('./views/ForgotPassView'),
    User = require('../../models/user'),
    HomeLayoutView = require('../homeLayout/views/HomeLayoutView'),
    WellComeView = require('./views/WellComeView');


module.exports = {

    showLayout: function() {
        // App.regions = new AppLayoutView();
        this.homeLayoutView = new HomeLayoutView();
        App.regions.getRegion('centralRegion').show(this.homeLayoutView);
        this.showAuthContent();
        App.on('signup', _.bind(this.showSignUpView, this));
        App.on('signin', _.bind(this.showSignInView, this));
    },

    showAuthContent: function() {
        var authView = new AuthView();
        this.homeLayoutView.showView(authView);
        authView.listenTo(authView, 'showSignInView', _.bind(this.showSignInView, this));
        authView.listenTo(authView, 'showSignUpView', _.bind(this.showSignUpView, this));

    },

    showSignInView: function() {
        App.router.navigate('sign_in', true);
    },

    showSignUpView: function() {
        App.router.navigate('sign_up', true);
    },

    // showWellComeView: function() {
    //     var wellComeView = new WellComeView();
    //     this.homeLayoutView.showView(wellComeView);
    //     // App.on('signin', _.bind(wellComeView, this));
    // },

    showMainContent: function() {
        var user = new User();
    	var signInView = new SignInView({
            model: user
        });
        var signUpView = new SignUpView({
            hello: 'hello',
            model: user
        });
        signUpView.listenTo(signUpView, 'signup', _.bind(this.submitSignUp, this));
    	this.homeLayoutView.showSignInView(signInView);
        this.homeLayoutView.showSignUpView(signUpView);
    }

    // showForgotPassView: function() {
    //     this.ForgotPassView = new ForgotPassView();
    //     this.homeLayoutView.showView(this.ForgotPassView);
    //     this.ForgotPassView.listenTo(this.ForgotPassView, 'showSentPassView', _.bind(this.showSentPassView, this));
    // }
};
