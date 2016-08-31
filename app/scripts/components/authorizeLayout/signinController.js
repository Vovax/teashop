'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    SignInView = require('./views/SignInView'),
    User = require('../../models/user');


module.exports = {

    showLayout: function() {
        var user = new User();
        this.signInView = new SignInView({
            model: user
        });
        App.regions.getRegion('centralRegion').show(this.signInView);
        this.signInView.listenTo(this.signInView, 'showSignUpView', _.bind(this.signUpView, this));
        this.signInView.listenTo(this.signInView, 'showForgotPassView', _.bind(this.showForgotPassView, this));
        this.signInView.listenTo(this.signInView, 'signin', _.bind(this.submitSignin, this));
    },

    showForgotPassView: function() {
        App.router.navigate('forgot_pass', true);
    },

    signUpView: function() {
        App.router.navigate('sign_up', true);
    },

    submitSignin: function(model) {

        debugger;
        // model.urlRoot = 'https://tea-shop.herokuapp.com/api/v1/sign_in';
        model.urlRoot = 'http://localhost:3000/auth/sign_in';
        model.save()
            .done(function(response, status, xhr) {
                debugger;

                window.sessionStorage.id = response.data.id;
                window.sessionStorage.email = response.data.email;
                window.sessionStorage.access_token = xhr.getResponseHeader('Access-Token');
                window.sessionStorage.client = xhr.getResponseHeader('Client');
                window.sessionStorage.uid = xhr.getResponseHeader('Uid');

                App.currentUser = model;

                // if (self.ui.checkbox.is(':checked')) {
                //         window.localStorage.id = response.data.id;
                //         window.localStorage.email = response.data.email;
                //         window.localStorage.access_token = xhr.getResponseHeader('Access-Token');
                //         window.localStorage.client = xhr.getResponseHeader('Client');
                //         window.localStorage.uid = xhr.getResponseHeader('Uid');
                //     };

                App.router.navigate('products', true);
            })
            .fail(function(xhr, status) {

                debugger;
            });
    }
};
