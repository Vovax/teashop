'use strict';

var App = {

	init: function() {
		console.log('hello');
		debugger;
		$(document).find('.app-container').css('background-color', 'red');
		$('.app-container').hide();
		setTimeout(function() {
			$('.app-container').show();
		}, 10000)
	}

};

module.exports = App;
