"use strict";

var template = require("ejs!../templates/signUp.ejs");

var SignUpView = Mn.ItemView.extend({

	className: 'signup-container',

	template: template,

	ui: {
		useremail: '.form-control[name="email"]',
        userpass: '.form-control[name="password"]',
        signup: '.submit_button'
	},

	events: {
		'click @ui.signup': 'submitSignup'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);

    }
});

module.exports = SignUpView;