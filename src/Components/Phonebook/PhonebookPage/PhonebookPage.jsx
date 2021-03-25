// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
// import { addContact } from '../../../reducer/contact/actions';

const Phonebook = () => {
  // const [filter, setFilter] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contact);
  // console.log(contacts);

  // function addCont(name, number) {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   if (contact.name !== '' && contact.number !== '') {
  //     return dispatch(addContact(contact));
  //   }
  // }

  // function deleteContact(contactId) {
  //   contacts.filter(contact => contact.id !== contactId);
  // }

  // function changeFilter(e) {
  //   setFilter(e.currentTarget.value);
  // }

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // );

  // useEffect(() => {
  //   setContacts(JSON.parse(localStorage.getItem('contacts')));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default Phonebook;
