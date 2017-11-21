import mockData from '../data/data.json';

export default function(state = mockData.allContacts, action) {
	switch(action.type) {
        case 'CONTACT_CREATE': {
			// return [Object.assign({}, action.payload, {'id': state.length}), ...state];
			if(!!state.length) {
				return [
					Object.assign({}, action.payload, {'id': (Math.max(...state.map(c => c.id))) + 1}),
					...state];
			} else {
				return [Object.assign({}, action.payload, {'id':1})];
			}
		}
        case 'CONTACT_DELETE': {return state.filter(c => c.id !== action.payload.id);}
		case 'CONTACT_UPDATE': {
			return state.map( c => {
				if(c.id === action.payload.id) {
					return action.payload;
				}
				return c;
			});
		}
		default: return state;
    }
}
