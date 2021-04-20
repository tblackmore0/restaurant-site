function homePageLoad () {

    
    let content = document.getElementById('content');
    content.style.backgroundImage = "url('/dist/Images/Homepage.jpeg')";

    let textBox = document.getElementById('textBox');
    textBox.className = 'textBox';

    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');

    title.className = 'homeTitle';
    body.className = 'homeBody';
    est.className = 'est';

    textBox.classList.add('notransition');

    title.innerHTML = 'Marco\'s';
    body.innerHTML = `Italian home cooking. No frills, no pretence,
    just traditional dishes from the heart of Tuscany. Take your time, open some wine. 
    This is Marco\'s.`;
    est.innerHTML = 'Est. 1976';

}

export {homePageLoad};