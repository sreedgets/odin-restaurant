
function createNav(){
    const nav = document.createElement('nav');
    nav.classList = 'main-nav';

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