"use strict";

var template = require("ejs!../templates/signIn.ejs");

var SignInView = Mn.ItemView.extend({

	className: 'container-fluid signin-container',

	template: template,

	ui: {
		email: 'input[name="email"]',
        password: 'input[name="password"]',
        signin: '.submit_button',
        rememberUser: 'input[name="rememberme"]',
        recoveryPassword: '.remaindpass'
	},

	events: {
		'click @ui.signin': 'submitLogin',
		'click @ui.recoveryPassword': 'recoveryPassword'
	},

	initialize: function() {
	},

	onShow: function() {
		this.ui.button.css('color', 'red');
	},

	callSomeMethod: function() {
		console.log('clicked');
	}
});

module.exports = SignInView;