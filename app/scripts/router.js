'use strict';

var AppLayoutView = require('./components/AppLayoutView'),
	App = require('./app');

var API = {
    home: function() {
        var authController = require('./components/authorizeLayout/authorizeController');
        authController.showLayout();
    },

    authenticate: function() {
        var authController = require('./components/authorizeLayout/authorizeController');
        authController.showLayout();
    },

    sign_in: function() {
        var signinController = require('./components/authorizeLayout/signinController');
        signinController.showLayout();
    },

    sign_up: function() {
        var signupController = require('./components/authorizeLayout/signupController');
        signupController.showLayout(); 
    },

    forgot_pass: function() {
        var forgotpassController = require('./components/authorizeLayout/forgotpassController');
        forgotpassController.showLayout();
    },

    products: function() {
        var productsController = require('./components/productLayout/productsController');
        productsController.showLayout();
    }
};


var Router = Mn.AppRouter.extend({

    controller: API,

    appRoutes: {
        '': 'home',
        'home': 'home',
        'auth': 'authenticate',
        'sign_in': 'sign_in',
        'sign_up': 'sign_up',
        'forgot_pass': 'forgot_pass',
        'products':'products'
    },

    routes: {}

});

module.exports = Router;
