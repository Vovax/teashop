'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    SignUpView = require('./views/SignUpView'),
    User = require('../../models/user');


module.exports = {

    showLayout: function() {
        var user = new User();
        this.signUpView = new SignUpView({
            model: user
        });
        App.regions.getRegion('centralRegion').show(this.signUpView);
        this.signUpView.listenTo(this.signUpView, 'showSignInView', _.bind(this.signInView, this));
        this.signUpView.listenTo(this.signUpView, 'signup', _.bind(this.submitSignup, this));
    },

    signInView: function() {
        App.router.navigate('sign_in', true);
    },

    submitSignup: function(model) {

        debugger;
        // model.urlRoot = 'https://tea-shop.herokuapp.com/api/v1';
        model.urlRoot = 'http://localhost:3000/auth';
        model.save()

            .done(function(response, status, xhr) {
                debugger;
                App.router.navigate('sign_in', true);
            })
            .fail(function(xhr, status) {
                debugger;
            });
    }

};
