import { item, button } from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from '../../../reducer/contacts/actions';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);
  const value = useSelector(state => state.contact.value);

  function deleteContact(contactId) {
    return dispatch(deleteContactAction(contactId));
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);
  console.log(value);

  return (
    <>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={item} key={id}>
            {name}:{number}
            <button
              className={button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}