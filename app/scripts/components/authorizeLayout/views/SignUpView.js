"use strict";

var template = require("ejs!../templates/signUp.ejs");

var SignUpView = Mn.ItemView.extend({

	className: 'signup-container',

	template: template,

	ui: {
		useremail: '.form-control[name="email"]',
        userpass: '.form-control[name="password"]',
        login: '.logination',
        signup: '.signup_button'
	},

	events: {
		'click @ui.login': 'openLoginationForm',
		'click @ui.signup': 'submitSignUp'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

	openLoginationForm: function(e) {
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