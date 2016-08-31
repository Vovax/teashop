'use strict';

var App = require('../../app'),
    AppLayoutView = require('../AppLayoutView'),
    ForgotPassView = require('./views/ForgotPassView'),
    User = require('../../models/user');


module.exports = {

    showLayout: function() {
        var user = new User();
        this.forgotPassView = new ForgotPassView({
            model: user
        });
        App.regions.getRegion('centralRegion').show(this.forgotPassView);
        // this.forgotPassView.listenTo(this.forgotPassView, 'showSentPassView', _.bind(this.sentPassView, this));
        // this.forgotPassView.listenTo(this.forgotPassView, 'recoveryPass', _.bind(this.submitRecoveryPass, this));
    },

    submitRecoveryPass: function() {
        debugger;

        model.urlRoot = 'http://localhost:3000/auth/password';
        model.save()
        
            .done(function(response, status, xhr) {
                debugger;
                // App.router.navigate('sign_in', true);
            })
            .fail(function(xhr, status) {
                debugger;
            });

    }

};