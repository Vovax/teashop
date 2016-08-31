"use strict";

var template = require("ejs!../templates/forgotPass.ejs");

var ForgotPassView = Mn.ItemView.extend({

	className: 'container-teashop recovery-container',

	template: template,

	ui: {
		input: '.form-control',
		email: '.form-control[name="email"]',
        signin: '.recovery_button'
	},

	events: {
		'focusout @ui.input': 'validateInput',
		'click @ui.signin': 'submitRecoveryPassword'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

    submitRecoveryPassword: function(e) {
    	debugger;
    	e.preventDefault();
		e.stopPropagation();
    	var email = this.ui.email.val();

    	$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/auth/password',
			data: {
				user: {
					email: email
				}
			},
		});
    }
});

module.exports = ForgotPassView;