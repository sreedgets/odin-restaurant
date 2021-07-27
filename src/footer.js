function createFooter(){
    const footer = document.createElement('footer');
    footer.classList = 'footer';

    const tagline = document.createElement('p');
    tagline.innerText = 'Food that is made for humans and anyone who says otherwise probably didnt.';
    footer.appendChild(tagline);

    const lorem = document.createElement('p');
    lorem.innerText = 'Powered by Lorem Ipsum';
    footer.appendChild(lorem);

    return footer;
}

export default createFooter