import {initialLoad} from './initial.js';
import {contactPageLoad} from './contact.js';
import {menuPageLoad, hideMenu} from './menu.js';
import {homePageLoad} from './home.js';
 
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
img1.src='./images/menu.jpeg';
img2.src='./images/contact.jpeg';
img3.src='./images/homepage.jpeg';

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

