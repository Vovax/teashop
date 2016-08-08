"use strict";

var template = require("ejs!../templates/signIn.ejs");

var SignInView = Mn.ItemView.extend({

	className: 'signin-container',

	template: template,

	ui: {
		useremail: '.form-control[name="email"]',
        userpass: '.form-control[name="password"]',
        rememberUser: '.remember-me[name="rememberme"]',
        recoveryPassword: '.remaindpass',
        signin: '.submit_button',
        registration: '.registration'
	},

	events: {
		'click @ui.recoveryPassword': 'recoveryPassword',
		'click @ui.signin': 'submitLogin',
		'click @ui.registration': 'openRegistrationForm'
	},

	initialize: function() {
		// this.render();
	},

	onShow: function() {
		// this.listenTo(view, '', this.);
	},

	callSomeMethod: function() {
	},

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);

    }

    // signin: function() {
    //     this.trigger('auth');
    // }

});

module.exports = SignInView;