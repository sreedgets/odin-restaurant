//Contains tab switching logic and imports for the website.
import createNav from './nav';
import createFooter from './footer';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

(function siteInit() {
    document.querySelector('#content').appendChild(createNav());
    document.querySelector('#content').appendChild(createHome());
    document.querySelector('#content').appendChild(createFooter());
    addNavEvetns();
})()

function consoleTest() {
    console.log('got eet');
}

//Add event listeners

function addNavEvetns(){
    const getHome = document.querySelector('.home');
    getHome.addEventListener('click', loadHome);

    const getMenu = document.querySelector('.menu');
    getMenu.addEventListener('click', loadMenu);

    const getContact = document.querySelector('.contact');
    getContact.addEventListener('click', loadContact);
};


function loadHome() {
    const content = document.querySelector('#content');
    content.innerText = '';
    content.appendChild(createNav());
    content.appendChild(createHome());
    content.appendChild(createFooter());
    addNavEvetns();
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.innerText = '';
    content.appendChild(createNav());
    content.appendChild(createMenu());
    content.appendChild(createFooter());
    addNavEvetns();
}

function loadContact() {
    const content = document.querySelector('#content');
    content.innerText = '';
    content.appendChild(createNav());
    content.appendChild(createContact());
    content.appendChild(createFooter());
    addNavEvetns();
}

