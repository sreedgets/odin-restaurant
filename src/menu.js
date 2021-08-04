function createMenu() {
    const menuWrapper = document.createElement('main');
    menuWrapper.classList = 'menu-wrapper';

    const menuContent = document.createElement('div');
    menuContent.classList = 'menu-content';
    menuWrapper.appendChild(menuContent);

    const menu = document.createElement('p');
    menu.innerText = 'menu';
    menuContent.appendChild(menu);

    return menuWrapper;
}

export default createMenu;