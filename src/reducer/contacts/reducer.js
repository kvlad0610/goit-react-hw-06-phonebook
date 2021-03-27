import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';
// import types from './types';

const local = () => {
  if (localStorage.contacts) {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  return [];
};

const initialState = {
  contacts: local(),
  filter: '',
};

const addContact = (state, action) => [...state, action.payload];

const deleteContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const contacts = createReducer(initialState.contacts, {
  [actions.addContactAction.type]: addContact,
  [actions.deleteContactAction.type]: deleteContact,
});

const filter = createReducer(initialState.filter, {
  [actions.filterContactAction.type]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.CONTACT_ADD:
//       return { ...state, contacts: [...state.contacts, action.payload] };

//     case types.CONTACT_DELETE:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload,
//         ),
//       };

//     case types.CONTACT_FILTER:
//       return {
//         ...state,
//         value: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
