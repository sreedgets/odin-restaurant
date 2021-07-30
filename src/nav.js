
function createNav(){
    const nav = document.createElement('nav');
    nav.classList = 'main-nav';

    const logo = document.createElement('h1');
    logo.classList = 'nav-logo';
    logo.innerText = 'VERY HUMAN FOOD';
    nav.appendChild(logo);

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const home = document.createElement('li');
    home.innerText = 'Home';
    ul.appendChild(home);

    const menu = document.createElement('li');
    menu.innerText = "Menu";
    ul.appendChild(menu);

    const contact = document.createElement('li');
    contact.innerText = 'Contact';
    ul.appendChild(contact);

    return nav;
}

export default createNav