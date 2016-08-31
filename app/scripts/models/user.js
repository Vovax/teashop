'use strict';

var User = Backbone.Model.extend({
	// urlRoot: 'https://tea-shop.herokuapp.com/api/v1',

	defaults: {
		email: '',
		password: ''
	}
});

module.exports = User;
