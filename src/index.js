import {initialLoad} from './initial.js';
import {contactPageLoad} from './contact.js';
import {menuPageLoad, hideMenu} from './menu.js';
import {homePageLoad} from './home.js';
 
initialLoad();

let contactButton = document.getElementById('contactLinkButton');
contactButton.addEventListener("click", function () {
    hideMenu()
    contactPageLoad ()
    
});

let menuButton = document.getElementById('menuLinkButton');
menuButton.addEventListener("click", function () {
    menuPageLoad ()
    
});

let homeButton = document.getElementById('homeLinkButton');
homeButton.addEventListener("click", function () {
    hideMenu()
    homePageLoad ()
 
});

