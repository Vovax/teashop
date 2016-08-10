'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    SignInView = require('./views/SignInView'),
    SignUpView = require('./views/SignUpView'),
    ForgotPassView =require('./views/ForgotPassView'),
    HomeLayoutView = require('../homeLayout/views/HomeLayoutView');

module.exports = {

    showLayout: function() {
        App.regions = new AppLayoutView();
        this.homeLayoutView = new HomeLayoutView();
        App.regions.getRegion('centralRegion').show(this.homeLayoutView);
        this.showMainContent();
    },

    showMainContent: function() {
<<<<<<< HEAD
    	var SignInView = new SignInView();
        var SignUpView = new SignUpView();
        // var ForgotPassView = new ForgotPassView();
    	this.homeLayoutView.showSignInView(SignInView);
        this.homeLayoutView.showSignUpView(SignUpView);
        // this.homeLayoutView.showForgotPassView(ForgotPassView);
=======
    	var signInView = new SignInView();
        var signUpView = new SignUpView();
    	this.homeLayoutView.showSignInView(signInView);
        this.homeLayoutView.showSignUpView(signUpView);


>>>>>>> feat-auth
    // },
    
    //     navigateToAuth: function() {
    //     this.homeLayoutView.$el.on('auth', _.bind(function() {
    //         App.trigger('viewChange', 'auth');
    //     }, this));
    }
};
