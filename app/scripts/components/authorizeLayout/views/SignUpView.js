"use strict";

var template = require("ejs!../templates/signUp.ejs");

var SignUpView = Mn.ItemView.extend({

	className: 'container-teashop signup-container',

	template: template,

	ui: {
		name: '.form-control[name=name]',
		zip_code: '.form-control[name=zipcode]',
		city: '.form-control[name=city]',
		address: '.form-control[name=address]',
		email: '.form-control[name="email"]',
        pass: '.form-control[name="password"]',
        signup: '.signup_button',
        login: '.logination'
	},

	events: {
		'focusout @ui.input': 'validateInput',
		'click @ui.signup': 'submitSignUp',
		'click @ui.login': 'openLogInForm'
	},

	initialize: function() {
		console.log(this.model);
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
    },

    submitForm: function() {
        this.trigger('submitSignUp');
    },

    submitSignUp: function() {
        this.model.set({
        	name: this.ui.name.val(),
        	zip_code: this.ui.zip_code.val(),
        	city: this.ui.city.val(),
        	address: this.ui.address.val(),
        	email: this.ui.email.val(),
        	password: this.ui.pass.val()
        });
        console.log(this.model.toJSON());
        debugger;
        this.trigger('signup', this.model);
    }

});

module.exports = SignUpView;