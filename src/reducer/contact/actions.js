import types from './types';

export const addContactAction = contact => ({
  type: types.CONTACT_ADD,
  payload: contact,
});

export const deleteContactAction = id => ({
  type: types.CONTACT_DELETE,
  payload: id,
});

export const filterContact = event => ({
  type: types.CONTACT_FILTER,
  payload: event,
});
