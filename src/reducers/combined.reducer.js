import { combineReducers } from 'redux';
import AllContactsReducer from './all-contact.reducer';
import SelectedContactReducer from './selected-contact.reducer';

const allReducers = combineReducers({
    allContacts: AllContactsReducer,
    selectedContact: SelectedContactReducer
});

export default allReducers;