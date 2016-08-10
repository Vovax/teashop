"use strict";

var App = require('../../../app');

var template = require("ejs!../templates/auth.ejs");

var AuthView = Mn.ItemView.extend({

	className: 'container-fluid container-teashop',

	template: template,

	regions: {
		mainRegion: '#main_region'
	},

	ui: {
		signin: '.enter-login',
		signup: '.enter-signup'
	},

	events: {
		'click @ui.signin': 'signinUser',
		'click @ui.signup': 'signupUser'
	},

	initialize: function() {
		console.log('Initializing Login View');
	},

	onShow: function(view) {
		// this.listenTo(view, '', this.);
	},

	serializeData: function() {
	},

    signinUser: function(e) {
		e.preventDefault();
		this.trigger('showSignInView');
	},

	signupUser:function(e) {
		e.preventDefault();
		this.trigger('showSignUpView');
	}
 
});

module.exports = AuthView;


