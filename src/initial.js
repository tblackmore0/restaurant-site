function initialLoad () {
    let content = document.getElementById('content');

    let navBar = document.createElement('nav');
    let main = document.createElement('div');
    let textBox = document.createElement('div');
        let homeTitle = document.createElement('h1');
        let homeBody = document.createElement('p');
        let est = document.createElement('p');

        let homeTitleText = document.createTextNode('Marco\'s');
        let homeBodyText = document.createTextNode(`Italian home cooking. No frills, no pretence,
        just traditional dishes from the heart of Tuscany. Take your time, open some wine. 
        This is Marco\'s.`);
        let estText = document.createTextNode('Est. 1976');


    let navMenu = document.createElement('div');
        let homeLink = document.createElement('a');
        let menuLink = document.createElement('a');
        let contactLink = document.createElement('a');

        let homeLinkText = document.createTextNode('Home');
        let menuLinkText = document.createTextNode('Menu');
        let contactLinkText = document.createTextNode('Contact');

    let menuNav = document.createElement('div');
    let menuItems = document.createElement('div');
    let menuItem1 = document.createTextNode('')


    homeLink.id = 'homeLinkButton';
    menuLink.id = 'menuLinkButton';
    contactLink.id = 'contactLinkButton';
    textBox.id = 'textBox';
    main.id = 'main';
    homeTitle.id = 'homeTitle';
    homeBody.id = 'homeBody';
    est.id = 'est';

    navBar.className = 'navBar';
    navMenu.className = 'navMenu';
        homeLink.className = 'navLink';
        menuLink.className = 'navLink';
        contactLink.className = 'navLink';
    main.className = 'main';
        textBox.className = 'textBox';
            homeTitle.className = 'homeTitle';
            homeBody.className = 'homeBody';
            est.className = 'est';
        

    homeLink.appendChild(homeLinkText);
    menuLink.appendChild(menuLinkText);
    contactLink.appendChild(contactLinkText);

    content.appendChild(navBar);
    content.appendChild(main);
    main.appendChild(textBox);
        textBox.appendChild(homeTitle);
        textBox.appendChild(homeBody);
        textBox.appendChild(est);
            homeTitle.appendChild(homeTitleText);
            homeBody.appendChild(homeBodyText);
            est.appendChild(estText);
            
    navBar.appendChild(navMenu);
    navMenu.appendChild(homeLink);
    navMenu.appendChild(menuLink);
    navMenu.appendChild(contactLink);
}

export {initialLoad};