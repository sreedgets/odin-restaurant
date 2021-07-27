//Contains tab switching logic and imports for the website.
import createNav from './nav';
import createFooter from './footer';

(function loadSite() {
    document.querySelector('#content').appendChild(createNav());
    document.querySelector('#content').appendChild(createFooter());
})()

