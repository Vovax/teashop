'use strict';

var Router = require('./router'),
	AppLayoutView = require('./components/AppLayoutView');
	// authorizeController = require('./authorizeController');


var App = new Mn.Application();

App.on('before:start', function() {
	// console.log('before:start');
	App.regions = new AppLayoutView();
});


App.on('start', function() {
	App.router = new Router();
    Backbone.history.start({
    	// pushState: true
    });


//     Backbone.sync = function(method, model, options) {
//   if (!options.noCSRF) {
//     var beforeSend = options.beforeSend;

//     // Set X-CSRF-Token HTTP header
//     options.beforeSend = function(xhr) {

//         xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//       // if (token) { xhr.setRequestHeader('X-CSRF-Token', token); }
//       if (beforeSend) { return beforeSend.apply(this, arguments); }
//     };
//   }

//   return Backbone._sync(method, model, options);
// };
});


$('body').delegate('a[href*="#"]:not([href="#"])', 'click', function (e) {
	e.preventDefault();
   	Backbone.history.navigate($(this).attr('href'), {trigger: true});
});

module.exports = App;




// App.on('start', function() {
// 	App.router = new Router();
//     if (Backbone.history) {
//         if(window.localStorage.uid || window.sessionStorage.uid) {
//             $.when(authorizeController.login_success()).done(function(currentUser) {
//                 if (currentUser) {
//                     App.currentUser = new User(currentUser.get('user'));
//                     Backbone.history.start();
//                 } else {
//                     App.currentUser = null;
//                     Backbone.history.start();
//                 };
//             });
//         } else {
//             App.currentUser = null;
//             Backbone.history.start();
//         }
//     };
// });