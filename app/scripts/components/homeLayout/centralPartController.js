'use strict';

var App = require('../../app');
    // AppLayoutView = require('../AppLayoutView'),
    // AuthView = require('./views/authView'),
    // HomeLayoutView = require('./views/HomeLayoutView'),
    // Vent = require('../../Vent');
    // SignInView = require('../authorizeLayout/views/SignInView'),
    // SignUpView = require('../authorizeLayout/views/SignUpView'),
    // ForgotPassView = require('../authorizeLayout/views/ForgotPassView'),
    // User = require('../../models/user');
    // SentPassView = require('../authorizeLayout/views/SentPassView');
    // ProductGalleryView = require('');

module.exports = {


    showSignInView: function() {
        App.trigger('signin');
        // var user = new User();
        // this.SignInView = new SignInView({
        //     model: user
        // });
        // this.homeLayoutView.showView(this.SignInView);
        // this.SignInView.listenTo(this.SignInView, 'showSignUpView', _.bind(this.showSignUpView, this));
        // this.SignInView.listenTo(this.SignInView, 'showForgotPassView', _.bind(this.showForgotPassView, this));
    },

    showSignUpView: function() {
        App.trigger('signup');
        // var user = new User();
        // this.SignUpView = new SignUpView({
        //     model: user
        // });
        // this.homeLayoutView.showView(this.SignUpView);
        // this.SignUpView.listenTo(this.SignUpView, 'showSignInView', _.bind(this.showSignInView, this));
        // App.regions.getRegion('centralRegion').show(this.SignUpView);
    }

    // showForgotPassView: function() {
    //     this.ForgotPassView = new ForgotPassView();
    //     this.homeLayoutView.showView(this.ForgotPassView);
    //     this.ForgotPassView.listenTo(this.ForgotPassView, 'showSentPassView', _.bind(this.showSentPassView, this));
    // },

    // showSentPassView: function() {
    //     this.SentPassView = new SentPassView();
    //     this.homeLayoutView.showView(this.SentPassView);
    // }
};
