//Contains tab switching logic and imports for the website.
import createNav from './nav';
import createFooter from './footer';
import createHome from './home';

(function loadSite() {
    document.querySelector('#content').appendChild(createNav());
    document.querySelector('#content').appendChild(createHome());
    document.querySelector('#content').appendChild(createFooter());
})()

function consoleTest() {
    console.log('got eet');
}

const getHome = document.querySelector('.home');
getHome.addEventListener('click', consoleTest);

const getMenu = document.querySelector('.menu');
getMenu.addEventListener('click', consoleTest);

const getContact = document.querySelector('.contact');
getContact.addEventListener('click', consoleTest);