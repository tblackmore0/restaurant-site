function menuPageLoad () {

    let content = document.getElementById('content');
    content.style.backgroundImage = "url('/dist/Images/Menu.jpeg')";

    let textBox = document.getElementById('textBox');
    textBox.style.opacity = '0%';

    let main = document.getElementById('main');
    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');

    setTimeout(function(){
        textBox.className = 'textBoxMenu'
        textBox.style.opacity= '100%'
        main.style.justifyContent = 'center'

        title.className = 'menuTitle';
        body.className = 'menuBody';
        est.className = 'menuEst';

        title.innerHTML = 'Lunch: 12 - 2';

    }, 900);


}

export {menuPageLoad}