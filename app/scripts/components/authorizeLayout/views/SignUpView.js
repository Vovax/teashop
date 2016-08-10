"use strict";

var template = require("ejs!../templates/signUp.ejs");

var SignUpView = Mn.ItemView.extend({

	className: 'signup-container',

	template: template,

	ui: {
		name: '.form-group[name=name]',
		zipcode: '.form-group[name=surname]',
		city: '.form-group[name=surname]',
		email: '.form-group[name="email"]',
        pass: '.form-group[name="password"]',
        signup: '.signup_button',
        login: '.logination'
	},

	events: {
		'click @ui.signup': 'submitSignup',
		'click @ui.login': 'openLogInForm'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

    openLogInForm: function(e) {
    	e.preventDefault();
		this.trigger('showSignInView');
    },

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);
    }
});

module.exports = SignUpView;