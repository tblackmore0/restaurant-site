import {initialLoad} from './initial.js';
import {contactPageLoad} from './contact.js';
import {menuPageLoad} from './menu.js';
import {homePageLoad} from './home.js';
 
initialLoad();

let contactButton = document.getElementById('contactLinkButton');
contactButton.addEventListener("click", contactPageLoad);

let menuButton = document.getElementById('menuLinkButton');
menuButton.addEventListener("click", menuPageLoad);

let homeButton = document.getElementById('homeLinkButton');
homeButton.addEventListener("click", homePageLoad);