'use strict';

var template = require('ejs!../templates/homeLayout.ejs'),
    App = require('../../../app');

var HomeLayoutView = Mn.LayoutView.extend({

    template: template,

    className: 'container-fluid container-teashop',

    regions: {
        mainRegion: '#main_region',
        popupRegion: '#popup_region'
    },

    ui: {},

    onShow: function() {

    },

    showAuthView: function(view) {
        this.mainRegion.show(view);
    }
});

module.exports = HomeLayoutView;
