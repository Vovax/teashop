"use strict";

var template = require("ejs!../templates/auth.ejs");

var AuthView = Mn.ItemView.extend({

	className: 'container-fluid container-teashop',

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
		
	},

	serializeData: function() {
	},

	callSomeMethod: function() {
		console.log('clicked');
	}
});

module.exports = AuthView;