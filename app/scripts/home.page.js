'use strict';

/*
 * Home view page object
 */
var HomePage = function() {

    this.url = "http://localhost:3000/index.html";
    this.get = function() {
        browser.get(this.url);
    };

};

module.exports = new HomePage();