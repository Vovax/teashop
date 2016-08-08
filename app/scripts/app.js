'use strict';

var Router = require('./router'),
	pageController = require('./pageController');


var App = new Mn.Application();


App.on('start', function() {
	App.router = new Router();
    Backbone.history.start({pushState: true});
});

module.exports = App;




// var RegionContainer = Marionette.LayoutView.extend({
//         el: '#app-container',

//         regions: {
//             centralRegion: '#central-region'
//         }
// });

// App.regions = new RegionContainer();

