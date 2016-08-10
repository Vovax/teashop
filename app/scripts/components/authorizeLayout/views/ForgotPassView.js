"use strict";

var template = require("ejs!../templates/forgotPass.ejs");

var ForgotPassView = Mn.ItemView.extend({

	className: 'recovery-container',

	template: template,

	ui: {
		input: '.form-group',
		email: '.form-group[name="email"]',
        signin: '.recovery_button'
	},

	events: {
		'click @ui.signin': 'submitRecoveryPassword'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

    submitRecoveryPassword: function(e) {
    	e.preventDefault();
		this.trigger('showForgotPassView');
    },

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);

    }
});

module.exports = ForgotPassView;