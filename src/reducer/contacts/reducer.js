import types from './types';

const local = () => {
  if (localStorage.contacts) {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  return [];
};

const initialState = {
  contacts: local(),
  value: '',
};

console.log(local());

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACT_ADD:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case types.CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };

    case types.CONTACT_FILTER:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
