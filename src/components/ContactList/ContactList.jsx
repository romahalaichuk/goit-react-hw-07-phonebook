import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import Filter from '../Filter/Filter';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './ContactList.module.css';
import {
  fetchContacts,
  deleteExistingContact,
} from '../../redux/phonebookSlice';

const ContactList = () => {
  const contacts = useSelector(state => {
    const filter = state.phonebook.filter;
    if (!filter) {
      return state.phonebook.contacts;
    }
    return state.phonebook.contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.includes(filter)
      );
    });
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = async id => {
    await dispatch(deleteExistingContact(id));
  };

  return (
    <div>
      <Filter />

      <Scrollbars
        autoHide
        style={{ width: '100%', height: '700px' }}
        renderTrackVertical={props => (
          <div {...props} className={styles.scrollbarVertical}>
            <div className={styles.scrollbarHandle} />
          </div>
        )}
      >
        <ul className={styles.listContainer}>
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              deleteContact={() => handleDeleteContact(contact.id)}
            />
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default ContactList;
