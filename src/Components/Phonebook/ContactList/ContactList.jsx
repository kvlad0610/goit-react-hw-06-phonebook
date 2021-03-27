import { item } from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from '../../../reducer/contacts/actions';
import { useEffect } from 'react';
// import { IconButton } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  // const classes = useStyles();

  function deleteContact(contactId) {
    return dispatch(deleteContactAction(contactId));
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);
  console.log(filter);

  return (
    <>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={item} key={id}>
            {name}:{number}
            {/* <button
              className={button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button> */}
            <IconButton
              aria-label="delete"
              // className={classes.margin}
              onClick={() => deleteContact(id)}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  );
}
