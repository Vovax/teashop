"use strict";

var template = require("ejs!../templates/productGallery.ejs");

var ProductGalleryView = Mn.ItemView.extend({

	className: 'container-fluid gallery-container',

	template: template,

	regions: {
        headerRegion: '#header_region',
        mainRegion: '#main_region',
        popupRegion: '#popup_region'
    },

	ui: {
		countProduct: '.count-input',
		addToCartBtn: '.add_to_cart_btn',
		productBtn1: '.add_to_cart_btn[name="btn1"]',
        productBtn2: '.add_to_cart_btn[name="btn2"]',
        productBtn3: '.add_to_cart_btn[name="btn3"]',
        productBtn4: '.add_to_cart_btn[name="btn4"]'

	},

	events: {
		'click @ui.productBtn1': 'addToCartBtn1',
		'click @ui.productBtn2': 'addToCartBtn2',
		'click @ui.productBtn3': 'addToCartBtn3',
		'click @ui.productBtn4': 'addToCartBtn4'
	},

	initialize: function() {
	},

	onShow: function() {
	},

	callSomeMethod: function() {
	},

	showView: function(view) {
        this.mainRegion.show(view);
    },

	validateInput: function(e) {
		var target = [];
		target.push(e.target);
		this.validateForm(target);

    }
});

module.exports = ProductGalleryView;