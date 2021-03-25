import { label, input } from './Filter.module.css';
import { useState } from 'react';

export default function Filter() {
  const [filter, setFilter] = useState('');

  function onChange(e) {
    setFilter(e.currentTarget.value);
  }

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // );

  return (
    <label className={label}>
      Find contacts by name <br />
      <input className={input} type="text" value={filter} onChange={onChange} />
    </label>
  );
}
