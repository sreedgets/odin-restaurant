function createHome() {
    const mainWrapper = document.createElement('main');
    mainWrapper.classList = "wrapper";

    const contentWrapper = document.createElement('div');
    contentWrapper.classList = "content-wrapper";
    mainWrapper.appendChild(contentWrapper);

    const homeContent = document.createElement('div');
    homeContent.classList = "home-content";
    contentWrapper.appendChild(homeContent);

    const welcome = document.createElement('h2');
    welcome.classList = 'welcome';
    welcome.innerText = 'WELCOME';
    homeContent.appendChild(welcome);

    const line = document.createElement('div');
    line.classList = "line";
    homeContent.appendChild(line);

    const about = document.createElement('p');
    about.classList = 'about-us';
    about.innerText = 'Here you will find very human food intended for humans to consume. Nothing about his restaurant will make you think otherwise!';
    homeContent.appendChild(about);

    return mainWrapper;
}

export default createHome;