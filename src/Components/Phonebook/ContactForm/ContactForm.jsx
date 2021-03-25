import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAction } from '../../../reducer/contact/actions';
import shortid from 'shortid';

import { form, label, input, button } from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  function handleChange(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  }

  function addContact() {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contact.name !== '' && contact.number !== '') {
      return dispatch(addContactAction(contact));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addContact();
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={form}>
        <label className={label}>
          Name <br />
          <input
            className={input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={label}>
          Number <br />
          <input
            className={input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
