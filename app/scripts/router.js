'use strict';

var AppLayoutView = require('./components/AppLayoutView'),
	App = require('./app');

var API = {
    home: function() {
        var centralPartController = require('./components/homeLayout/centralPartController');

        centralPartController.showLayout();
    }
};


var Router = Mn.AppRouter.extend({

    controller: API,

    appRoutes: {
        '': 'home'
    }

});

module.exports = Router;