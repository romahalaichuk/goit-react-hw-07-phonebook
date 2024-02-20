import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/phonebookSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(addNewContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name here"
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Enter phone number here"
        required
      />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
