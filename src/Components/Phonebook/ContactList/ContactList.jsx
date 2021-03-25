import { item, button } from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from '../../../reducer/contact/actions';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);

  function deleteContact(contactId) {
    return dispatch(deleteContactAction(contactId));
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
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
