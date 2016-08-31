"use strict";

var template = require("ejs!../templates/wellCome.ejs");

var WellComeView = Mn.ItemView.extend({

	className: 'wellcome-container',

	template: template,
});

module.exports = WellComeView;