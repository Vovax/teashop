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
		'click @ui.login': 'openLoginView',
		'click @ui.signup': 'openSignupView'
	},

	initialize: function() {
	},

	onShow: function() {
		this.ui.login.css('color', 'red');
	},

	serializeData: function() {
	},

	callSomeMethod: function() {
		console.log('clicked');
	}
});

module.exports = AuthView;