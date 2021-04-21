function menuPageLoad () {

    let content = document.getElementById('content');
    content.style.backgroundImage = "url('/dist/Images/Menu.jpeg')";

    let textBox = document.getElementById('textBox');
    textBox.style.opacity = '0%';

    let main = document.getElementById('main');
    let title = document.getElementById('homeTitle');
    let body = document.getElementById('homeBody');
    let est = document.getElementById('est');


    title.style.display = 'none';
    body.style.display = 'none';
    est.style.display = 'none';


    setTimeout(function(){
        textBox.className = 'textBoxMenuInitial'
        textBox.style.opacity= '100%'
        main.style.justifyContent = 'center'


        menuInitial.style.display = 'flex';

    }, 900);

    
let initialTitles = document.querySelectorAll('.initialTitle');
let menuInitial = document.getElementById('menuInitial');
let menuNav = document.getElementById('menuNav');
let lunchToggle = document.getElementById('lunchToggle');
let dinnerToggle = document.getElementById('dinnerToggle');
let initialLunch = document.getElementById('initialLunch');
let initialDinner = document.getElementById('initialDinner');
let lunchMenu = document.getElementById('lunchMenu');
let dinnerMenu = document.getElementById('dinnerMenu');


initialLunch.addEventListener("click", showLunchMenu);
initialDinner.addEventListener("click", showDinnerMenu);

function showLunchMenu() {
    menuInitial.style.display = 'none';
    textBox.className = 'textBoxMenu';

    menuNav.style.display = 'flex';
    lunchToggle.style.display = 'flex';
    dinnerToggle.style.display = 'flex';

    title.style.display = 'flex';
    title.className = 'menuTitle';

    title.style.opacity = '0%'
        setTimeout (function () {
            title.innerHTML = 'Lunch: 12-2';
            title.style.opacity = '100%';
        }, 200);

    lunchMenu.style.display = 'flex';
    dinnerMenu.style.display = 'none';

    lunchToggle.style.backgroundColor = 'rgb(231, 245, 155)';
    dinnerToggle.style.backgroundColor = '';

    addToggleListeners ();

}

function showDinnerMenu () {
    menuInitial.style.display = 'none';
    textBox.className = 'textBoxMenu';

    menuNav.style.display = 'flex';
    dinnerToggle.style.display = 'flex';
    lunchToggle.style.display = 'flex';

    title.style.display = 'flex';
    title.className = 'menuTitle';

    title.style.opacity = '0%'
        setTimeout (function () {
            title.innerHTML = 'Dinner: 6-9';
            title.style.opacity = '100%';
        }, 200);
   

    dinnerMenu.style.display = 'flex'
    lunchMenu.style.display = 'none'

    dinnerToggle.style.backgroundColor = 'rgb(231, 245, 155)';
    lunchToggle.style.backgroundColor = '';

    addToggleListeners ();
}

function addToggleListeners () {
    lunchToggle.addEventListener("click", showLunchMenu)
    dinnerToggle.addEventListener("click", showDinnerMenu)
}


    
}

export {menuPageLoad}