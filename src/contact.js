function contactPageLoad () {
    let content = document.getElementById('content');
    content.style.backgroundImage = "url('/dist/images/contact.jpeg')";

    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');
    let textBox = document.getElementById('textBox');
    let main = document.getElementById('main')

    textBox.style.opacity = '0%';

    setTimeout(function(){
        textBox.className = 'textBoxContact'
        textBox.style.opacity= '100%'
        main.style.justifyContent = 'center'

        title.className = 'contactTitle';
        body.className = 'contactBody';
        est.className = 'contactEst';

        title.innerHTML = 'Contact';
        body.innerHTML = 'Telephone: 0123456789<br/>Email: marcositalian@fakeemail.com<br/><br/>Address:<br/> 123 Real Road<br/>City<br/>Postcode<br/>Country';
        est.innerHTML = '';
    }, 900)

}

export {contactPageLoad};