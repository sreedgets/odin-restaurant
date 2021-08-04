function createContact() {
    const contactWrapper = document.createElement('main');
    contactWrapper.classList = 'contact-wrapper';

    const contactContent = document.createElement('div');
    contactContent.classList = 'contact-content';
    contactWrapper.appendChild(contactContent);

    const contactInfo = document.createElement('p');
    contactInfo.innerText = 'DO NOT CALL';
    contactWrapper.appendChild(contactInfo);

    return contactWrapper;
}

export default createContact;