
export default function(state = null, action) {
    switch(action.type) {
        case 'CONTACT_SELECTED': return action.payload;
        case 'CONTACT_UNSELECT': return null;
        default: return state;
    }
}
