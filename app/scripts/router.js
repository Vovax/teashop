'use strict';

var AppLayoutView = require('./components/AppLayoutView'),
	App = require('./app');

var API = {
    home: function() {
        var centralPartController = require('./components/homeLayout/centralPartController');

        centralPartController.showLayout();
    },
    authenticate: function() {
        var authController = require('./components/authorizeLayout/authorizeController');
        authController.showLayout();
    }
};


var Router = Mn.AppRouter.extend({

    controller: API,

    appRoutes: {
        '': 'home',
        'home': 'home',
        'auth': 'authenticate'
    },

    routes: {}

});




// App.vent.on('home', function() {
//     App.router.navigate('');
//     PageController.showHomeView();
// });

// App.vent.on('login', function() {
//     App.router.navigate('#profile');
//     PageController.showStartView();
// });



module.exports = Router;