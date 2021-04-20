import {homePageLoad} from './home.js';
import {contactPageLoad} from './contact.js';
 
homePageLoad();

let contactButton = document.getElementById('contactLinkButton');
contactButton.addEventListener("click", contactPageLoad);