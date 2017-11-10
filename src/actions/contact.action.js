
export const selectContact = (contact) => {
    console.log('Contact selected = ' + contact.name);
    return {
        type: 'CONTACT_SELECTED',
        payload: contact
    };
};

export const unselectContact = () => {
    console.log('Unselecting Contact');
    return {
        type: 'CONTACT_UNSELECT'
    }
}

export const deleteContact = (contact) => {
    console.log('Contact deleted = ' + contact.name);
    return {
        type: 'CONTACT_DELETE',
        payload: contact
    };
};

export const updateContact = (contact) => {
    console.log('Updating contact = ' + contact.name);
    return {
        type: 'CONTACT_UPDATE',
        payload: contact
    };
};

export const createNewContact = (contact) => {
    console.log('Adding contact = ' + contact.name);
    return {
        type: 'CONTACT_CREATE',
        payload: contact
    };
};

