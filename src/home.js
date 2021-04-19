function homePageLoad () {
    let content = document.getElementById('content');

    let navBar = document.createElement('div');
    navBar.className = 'navBar';
    content.appendChild(navBar);
}

export {homePageLoad};