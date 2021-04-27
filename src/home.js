function homePageLoad () {

    let content = document.getElementById('content');
    let textBox = document.getElementById('textBox');
    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');
    let main = document.getElementById('main');

    textBox.style.opacity = '0%';
    content.style.backgroundImage = "url('./dist/Images/Homepage.jpeg')";

    setTimeout(function(){
        textBox.className = 'textBox';
        textBox.style.opacity= '100%';
        title.className = 'homeTitle';
        body.className = 'homeBody';
        est.className = 'est';
        textBox.style.opacity= '100%';
        main.style.justifyContent = 'flex-end';

        title.innerHTML = 'Marco\'s';
        body.innerHTML = `Italian home cooking. No frills, no pretence,
        just traditional dishes from the heart of Tuscany. Take your time, open some wine. 
        This is Marco\'s.`;
        est.innerHTML = 'Est. 1976';
    }, 900);
}

export {homePageLoad};