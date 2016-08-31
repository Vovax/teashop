'use strict';

var userController = {

	login: function() {
		debugger;
		// var self = this,
			dfd = $.Deferred(),
			id = window.localStorage.id || window.sessionStorage.id,
			uid = window.localStorage.uid || window.sessionStorage.uid,
			email = window.localStorage.email || window.sessionStorage.email;

		this.model = new User();
		debugger;
		this.model.set({
			id: id,
			uid: uid,
			email: email
		});

		this.model.urlRoot = '/api/v1/users';

		this.model.fetch()
			.done(function(jqXHR) {
				dfd.resolve(self.model);
			}).fail(function(jqXHR) {
				window.localStorage.removeItem('id');
				window.localStorage.removeItem('uid');
				window.localStorage.removeItem('email');
				window.sessionStorage.removeItem('id');
				window.sessionStorage.removeItem('uid');
				window.sessionStorage.removeItem('email');
				dfd.resolve();
			});

		return dfd.promise();
	},

	logout: function() {
		if (!this.model) {
			this.model = App.currentUser
		}

		// loader.show(I18n.t('loader.signout'));

		this.model.urlRoot = '/api/v1/sign_in';
		this.model.set({
			id: ''
		});

		this.model.destroy()
			.done(function(response, status) {
			}).fail(function(response, status) {
			});

		window.localStorage.removeItem('id');
		window.localStorage.removeItem('uid');
		window.localStorage.removeItem('email');
		window.localStorage.removeItem('access_token');
		window.localStorage.removeItem('client');
		window.sessionStorage.removeItem('id');
		window.sessionStorage.removeItem('uid');
		window.sessionStorage.removeItem('email');
		window.sessionStorage.removeItem('access_token');
		window.sessionStorage.removeItem('client');
	}
}
