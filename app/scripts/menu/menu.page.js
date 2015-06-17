'use strict';

/*
 * Home view page object
 */
var MenuPage = function() {

    //grab the heading h3 element
    this.heading = element(by.id('hello'));

    this.url = "http://localhost:3000/index.html";
    this.get = function() {
        browser.get(this.url);
    };

};

module.exports = new MenuPage();