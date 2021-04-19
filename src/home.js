function homePageLoad () {
    let content = document.getElementById('content');

    let navBar = document.createElement('div');
    let main = document.createElement('div');
//    let footer = document.createElement('div');
    let textBox = document.createElement('div');

    navBar.className = 'navBar';
    main.className = 'main';
    
//    footer.className = 'footer';
    textBox.className = 'textBox';

    content.appendChild(navBar);
    content.appendChild(main);
    main.appendChild(textBox);
//    content.appendChild(footer);
}

export {homePageLoad};