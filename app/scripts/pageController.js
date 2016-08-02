'use strict';


// require veiw

var App = require('./app');

module.exports = {

    home: function() {
        var centralPartController = require('./controllers/centralPartController');
        	// rightPartController = require('./controllers/rightPartController'),
         //    headerController = require('./controllers/headerController'),
         //    leftPartController = require('./controllers/leftPartController');
        // headerController.showLayout();
        centralPartController.showLayout();
        // leftPartController.showLayout();
        // rightPartController.showLayout();
    },

    // auth: function() {
    //     var authController = require('./components/auth/authController');
    //     authController.showLayout();
    // }
};



var PageController = {

	showStartView: function() {
		if (App.currentUser) {
			App.router.navigate('#profile/edit');
			App.vent.trigger('profileEdit');
		} else {
			App.vent.trigger('home');
		};
	},

};
