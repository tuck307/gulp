'use strict';

describe('Menu testing', function() {
    browser.ignoreSynchronization = true
    var HomePage = require('../home.page.js');

    beforeEach(function() {
        HomePage.get();
    });

    it('should render home when user navigates to /home', function() {
        //should be at the correct url
        expect(browser.getCurrentUrl()).toEqual(HomePage.url);

    });

});