"use strict";

var template = require("ejs!../templates/sentPass.ejs");

var SentPassView = Mn.ItemView.extend({

	className: 'sent-pass-container',

	template: template,
});

module.exports = SentPassView;