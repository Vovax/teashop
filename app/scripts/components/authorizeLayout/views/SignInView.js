"use strict";

var template = require("ejs!../templates/signIn.ejs"),
    User = require('../../../models/user');

var SignInView = Mn.ItemView.extend({

	className: 'container-teashop signin-container',

	template: template,

	ui: {
		input: '.form-control',
		email: '.form-control[name="email"]',
        pass: '.form-control[name="password"]',
        rememberUser: '.remember-me[name="rememberme"]',
        recoveryPassword: '.remaindpass',
        signin: '.signin_button',
        registration: '.registration'
	},

	events: {
		'focusout @ui.input': 'validateInput',
		'click @ui.recoveryPassword': 'recoveryPassword',
		'click @ui.signin': 'submitSignIn',
		'click @ui.registration': 'openRegistrationForm'
	},

	initialize: function() {
        // debugger;
		console.log(this.model);
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
    },

    submitForm: function() {
        this.trigger('submitSignIn');
    },

    submitSignIn: function() {
        this.model.set({
        	email: this.ui.email.val(),
        	password: this.ui.pass.val()
        })
        console.log(this.model.toJSON());
        this.trigger('signin', this.model);
    },

    validateForm: function() {
        var regexEmail = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi,
            regexPassword = /^.{8,}$/,
            testEmail = this.ui.email.val(),
            testPswd = this.ui.pass.val();
        if (regexEmail.test(testEmail) & regexPassword.test(testPswd)) {
        	debugger;
            return true;
        } else {
            console.log('ERROR');
            return false;
        }
    }
    
});

module.exports = SignInView;