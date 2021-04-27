function menuPageLoad () {

    let initialTitles = document.querySelectorAll('.initialTitle');
    let menuInitial = document.getElementById('menuInitial');
    let menuNav = document.getElementById('menuNav');
    let lunchToggle = document.getElementById('lunchToggle');
    let dinnerToggle = document.getElementById('dinnerToggle');
    let initialLunch = document.getElementById('initialLunch');
    let initialDinner = document.getElementById('initialDinner');
    let menu = document.getElementById('menu'); 
    let menuItem1 = document.getElementById('menuItem1');
    let menuItem2 = document.getElementById('menuItem2');
    let menuItem3 = document.getElementById('menuItem3');
    let menuItem4 = document.getElementById('menuItem4');
    let menuItem5 = document.getElementById('menuItem5');
    let menuItem6 = document.getElementById('menuItem6');

    initialLunch.addEventListener("click", showLunchMenu);
    initialDinner.addEventListener("click", showDinnerMenu);

        let content = document.getElementById('content');
        content.style.backgroundImage = "url('./images/menu.jpeg')";

        let textBox = document.getElementById('textBox');
        textBox.style.opacity = '0%';
        menuNav.style.display = 'none';
        menu.style.display = 'none';

        let main = document.getElementById('main');
        let title = document.getElementById('homeTitle');
        let body = document.getElementById('homeBody');
        let est = document.getElementById('est');


        title.style.display = 'none';
        body.style.display = 'none';
        est.style.display = 'none';



    setTimeout(function(){
        textBox.className = 'textBoxMenuInitial';
        textBox.style.opacity= '100%';
        main.style.justifyContent = 'center';


        menuInitial.style.opacity = '100%';
        menuInitial.style.display = 'flex';

    }, 900);


function showLunchMenu() {
    menuInitial.style.display = 'none';
    textBox.className = 'textBoxMenu';

    lunchToggle.style.display = 'flex';
    dinnerToggle.style.display = 'flex';


    title.style.display = 'flex';
    title.className = 'menuTitle';

    title.style.opacity = '0%';
    menu.style.opacity = '0%';
        setTimeout (function () {
            title.innerHTML = 'Lunch: 12-2';
            title.style.opacity = '100%';
            menu.style.opacity = '100%';
            menuNav.style.opacity = '100%';
            menuNav.style.display = 'flex';
            lunchToggle.style.opacity = '100%';
            dinnerToggle.style.opacity= '100%';

            menu.style.display = 'grid';
            menuItem1.style.display = 'flex';
            menuItem2.style.display = 'flex';
            menuItem3.style.display = 'flex';
            menuItem4.style.display = 'flex';
            menuItem5.style.display = 'none';
            menuItem6.style.display = 'none';
            
            menuItem1.innerHTML = '<u>Panzanella</u>Bread soaked in water and vinegar, and dressed with fresh onions, basil, tomatoes, and cucumber';
            menuItem2.innerHTML = '<u>Fagioli all’uccelletto</u>Beans cooked with sage, garlic, olive oil, and tomatoes';
            menuItem3.innerHTML = '<u>Ribolita</u>Bean and kale soup served with toasted bread';
            menuItem4.innerHTML = '<u>Torta di ceci</u>Chickpea flour cake with grilled aubergine';
            menuItem5.innerHTML = '';
            menuItem6.innerHTML = '';
    
        lunchToggle.style.backgroundColor = 'rgb(231, 245, 155)';
        dinnerToggle.style.backgroundColor = '';
        }, 300);



    addToggleListeners ();

}

function showDinnerMenu () {
    menuInitial.style.display = 'none';
    textBox.className = 'textBoxMenu';

    dinnerToggle.style.display = 'flex';
    lunchToggle.style.display = 'flex';

    title.style.display = 'flex';
    title.className = 'menuTitle';

    title.style.opacity = '0%';
    menu.style.opacity = '0%';
        setTimeout (function () {
            title.innerHTML = 'Dinner: 6-9';
            title.style.opacity = '100%';
            menu.style.opacity = '100%';
            menuNav.style.opacity = '100%';
            menuNav.style.display = 'flex';
            lunchToggle.style.opacity = '100%';
            dinnerToggle.style.opacity= '100%';

            menu.style.display = 'grid'
            menuItem1.style.display = 'flex';
            menuItem2.style.display = 'flex';
            menuItem3.style.display = 'flex';
            menuItem4.style.display = 'flex';
            menuItem5.style.display = 'flex';
            menuItem6.style.display = 'flex';
    
            menuItem1.innerHTML = '<u>Cacciucco alla Livornese</u>Stew made with octopus, squid, clams, mussels and monkfish';
            menuItem2.innerHTML = '<u>Potato tortelli</u>Fresh pasta filled with game meat sauce';
            menuItem3.innerHTML = '<u>Spezzatino</u>Slow-cooked stew prepared with cuts of the day';
            menuItem4.innerHTML = '<u>Pappardelle al cinghiale</u>Fresh pasta with wild boar ragu';
            menuItem5.innerHTML = '<u>Bistecca alla Fiorentina</u>Dry-aged beef steak with side salad';
            menuItem6.innerHTML = '<u>Faraona arrosto</u>Roasted guinea-fowl served with chicory in olive oil and garlic';
    
        dinnerToggle.style.backgroundColor = 'rgb(231, 245, 155)';
        lunchToggle.style.backgroundColor = '';
        }, 300);
   



    addToggleListeners ();
}

function addToggleListeners () {
    lunchToggle.addEventListener("click", showLunchMenu)
    dinnerToggle.addEventListener("click", showDinnerMenu)
}


    
}

function hideMenu () {
    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');

    menu.style.opacity = '0%';
    menuInitial.style.opacity = '0%';
    menuNav.style.opacity = '0%';
    lunchToggle.style.opacity = '0%';
    dinnerToggle.style.opacity = '0%';

    setTimeout (function () {
        title.style.display = '';
        body.style.display = '';
        est.style.display = '';
        menu.style.display = 'none';
        menuInitial.style.display = 'none';
        menuNav.style.display = 'none';
        lunchToggle.style.display = 'none';
        dinnerToggle.style.display = 'none';
    }, 900);
}

export {menuPageLoad, hideMenu}