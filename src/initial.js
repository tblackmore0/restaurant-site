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

    let menuInitial = document.createElement('div')
    let menuNav = document.createElement('div');
    let lunchToggle = document.createElement('div');
    let dinnerToggle = document.createElement('div');
    let lunchMenu = document.createElement('div');
    let dinnerMenu = document.createElement('div');

    let initialLunch = document.createElement('div');
    let initialDinner = document.createElement('div');
        let initialLunchText = document.createTextNode('');
        let initialDinnerText = document.createTextNode('');
        initialLunch.innerHTML = 'Lunch<br/>12-2';
        initialDinner.innerHTML = 'Dinner<br/>6-9';


    homeLink.id = 'homeLinkButton';
    menuLink.id = 'menuLinkButton';
    contactLink.id = 'contactLinkButton';
    textBox.id = 'textBox';
    main.id = 'main';
    homeTitle.id = 'homeTitle';
    homeBody.id = 'homeBody';
    est.id = 'est';
    initialLunch.id = 'initialLunch';
    initialDinner.id = 'initialDinner';

    menuInitial.id = 'menuInitial';
    initialLunch.id = 'initialLunch';
    initialDinner.id = 'initialDinner';
    menuNav.id = 'menuNav';
    lunchToggle.id = 'lunchToggle';
    dinnerToggle.id = 'dinnerToggle';
    lunchMenu.id = 'lunchMenu';
    dinnerMenu.id = 'dinnerMenu';



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

    menuInitial.className = 'menuInitial';
        initialLunch.className = 'initialTitle';
        initialDinner.className = 'initialTitle';
    menuNav.className = 'menuNav';
    lunchToggle.className = 'menuToggle';
    dinnerToggle.className = 'menuToggle';
    lunchMenu.className = 'menu';  
    dinnerMenu.className = 'menu';


    menuInitial.style.display = 'none';
    menuNav.style.display = 'none';
    lunchToggle.style.display = 'none';
    dinnerToggle.style.display = 'none';
    lunchMenu.style.display = 'none';
    dinnerMenu.style.display = 'none';

    textBox.appendChild(menuInitial);
    textBox.appendChild(menuNav);
        menuNav.appendChild(lunchToggle);
        menuNav.appendChild(dinnerToggle);
    textBox.appendChild(lunchMenu);
    textBox.appendChild(dinnerMenu);

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

    menuInitial.appendChild(initialLunch);
    menuInitial.appendChild(initialDinner);
    initialLunch.appendChild(initialLunchText);
    initialDinner.appendChild(initialDinnerText);
}

export {initialLoad};