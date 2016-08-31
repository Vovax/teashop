'use strict';

var template = require('ejs!../templates/homeLayout.ejs'),
    App = require('../../../app');

var HomeLayoutView = Mn.LayoutView.extend({

    template: template,

    className: 'container-fluid container-teashop',

    regions: {
        headerRegion: '#header_region',
        mainRegion: '#main_region',
        popupRegion: '#popup_region'
    },

    ui: {},

    onShow: function() {

    },

    showView: function(view) {
        this.mainRegion.show(view);
    },
    showSignIn: function(view) {
        this.mainRegion.show(view);
    },

    showSignUp: function(view) {
        this.mainRegion.show(view);
    }


});

module.exports = HomeLayoutView;
