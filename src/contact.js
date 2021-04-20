function contactPageLoad () {
    let content = document.getElementById('content');
    content.style.backgroundImage = "url('/dist/Images/Contact.jpeg')";

    let textBox = document.getElementById('textBox');
    textBox.className = 'textBoxContact';

    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');

    title.className = 'contactTitle';
    body.className = 'contactBody';
    est.className = 'contactEst';

    title.innerHTML = 'Contact';
    body.innerHTML = 'Telephone: 0123456789<br/>Email: marcositalian@fakeemail.com<br/><br/>Address:<br/> 123 Real Road<br/>City<br/>Postcode<br/>Country';
    est.innerHTML = '';


}



export {contactPageLoad};