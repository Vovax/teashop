'use strict';


var AppLayoutView = Mn.LayoutView.extend({

    template: require('ejs!../templates/appLayout.ejs'),


    el: '#app-container',

    regions: {
    	topRegion: '#top-region',
        centralRegion: '#central-region',
        galleryRegion: '#gallery-region',
        bottomRegion: '#bottom-region'
    },

    initialize: function() {
        this.render();
    }
});

module.exports = AppLayoutView;



