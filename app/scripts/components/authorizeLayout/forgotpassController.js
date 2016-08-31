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
        this.forgotPassView.listenTo(this.forgotPassView, 'showTextMessage', _.bind(this.showTextMessage, this));
        // this.forgotPassView.listenTo(this.forgotPassView, 'showSentPassView', _.bind(this.sentPassView, this));
        // this.forgotPassView.listenTo(this.forgotPassView, 'recoveryPass', _.bind(this.submitRecoveryPass, this));
        // serializeData: func() { return { text: this.options.text }};
    },

    showTextMessage: function(text) {
        debugger;
        
    }

};