import types from './types';

const contacts = JSON.parse(localStorage.getItem('contacts'));

const reducer = (state = contacts, action) => {
  switch (action.type) {
    case types.CONTACT_ADD:
      return [...state, action.payload];

    case types.CONTACT_DELETE:
      return state.filter(contact => contact.id !== action.payload);

    case types.CONTACT_FILTER:
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase()),
      );

    default:
      return state;
  }
};

export default reducer;
