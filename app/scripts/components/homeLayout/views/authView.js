"use strict";

var App = require('../../../app');

var template = require("ejs!../templates/auth.ejs");

var AuthView = Mn.ItemView.extend({

	className: 'container-fluid',

	template: template,

	regions: {
		mainRegion: '#main_region'
	},

	ui: {
		signin: '.enter-login',
		signup: '.signup'
	},

	events: {
		'click @ui.signin': 'signinUser',
		'click @ui.signup': 'signup'
	},

	initialize: function() {
		console.log('Initializing Login View');
	},

	onShow: function(view) {
		// this.listenTo(view, '', this.);
	},

	serializeData: function() {
	},

	// signinUser: function() {
	// 	console.log('signin');
	// },

    // openLogInView: function(view) {
    // 	e.preventDefault();
    //     this.centralRegion.show(view);
    // },

    signinUser: function(e) {
		e.preventDefault();
		this.trigger('showSigninView');
	}

    
});

module.exports = AuthView;


