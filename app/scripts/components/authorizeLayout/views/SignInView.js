"use strict";

var template = require("ejs!../templates/signIn.ejs");

var SignInView = Mn.ItemView.extend({

	className: 'signin-container',

	template: template,

	ui: {
		input: '.form-group',
		email: '.form-group[name="email"]',
        pass: '.form-group[name="password"]',
        rememberUser: '.remember-me[name="rememberme"]',
        recoveryPassword: '.remaindpass',
        signin: '.signin_button',
        registration: '.registration'
	},

	events: {
		'click @ui.recoveryPassword': 'recoveryPassword',
		'click @ui.signin': 'submitSignIn',
		'click @ui.registration': 'openRegistrationForm'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

	recoveryPassword: function(e) {
		e.preventDefault();
		this.trigger('showForgotPassView');
	},

    openRegistrationForm: function(e) {
    	e.preventDefault();
		this.trigger('showSignUpView');
    },

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);

    }
});

module.exports = SignInView;