'use strict';


// require veiw


var App = require('./app');

module.exports = {

    home: function() {
        var centralPartController = require('./components/homeLayout/centralPartController');
        	// rightPartController = require('./controllers/rightPartController'),
         //    headerController = require('./controllers/headerController'),
         //    leftPartController = require('./controllers/leftPartController');
        // headerController.showLayout();
        centralPartController.showLayout();
        // leftPartController.showLayout();
        // rightPartController.showLayout();
    },

    auth: function() {
        var authController = require('./components/authorizeLayout/authorizeController');
        authController.showLayout();
    }
};

// var PageController = {

//     home: function() {
//         App.regions.mainRegion.show(new AuthView());

//     },
// };





// var PageController = {

// 	showStartView: function() {
// 		if (App.currentUser) {
// 			App.router.navigate('#profile/edit');
// 			App.vent.trigger('profileEdit');
// 		} else {
// 			App.vent.trigger('home');
//             App.vent.trigger('auth');
// 		};
// 	},

// };
