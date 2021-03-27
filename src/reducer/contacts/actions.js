import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('contact/add');
export const deleteContactAction = createAction('contact/delete');
export const filterContactAction = createAction('contact/filter');

// import types from './types';

// export const addContactAction = contact => ({
//   type: types.CONTACT_ADD,
//   payload: contact,
// });

// export const deleteContactAction = id => ({
//   type: types.CONTACT_DELETE,
//   payload: id,
// });

// export const filterContactAction = event => ({
//   type: types.CONTACT_FILTER,
//   payload: event,
// });
