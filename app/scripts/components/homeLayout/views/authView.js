"use strict";

var template = require("ejs!../templates/auth.ejs");

var AuthView = Mn.ItemView.extend({

	className: 'container-fluid auth-container',

	template: template,

	ui: {
		login: '.enter-login',
		signup: '.enter-signup'
	},

	events: {
		// 'click @ui.button': 'callSomeMethod',
		'click @ui.login': 'login',
		'click @ui.signup': 'signup'
	},

	initialize: function() {
	},

	onShow: function() {
		this.ui.login.css('color', 'red');
	},

	callSomeMethod: function() {
		console.log('clicked');
	}
});

module.exports = AuthView;