'use strict';

var Router = require('./router');


var App = new Mn.Application();


App.on('start', function() {
	App.router = new Router();
    Backbone.history.start();
});

module.exports = App;

