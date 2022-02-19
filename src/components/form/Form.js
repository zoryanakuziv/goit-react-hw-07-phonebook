import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Label, FormInput, Button } from './Form.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contacts-api';
import { Loader } from '../loader/Loader';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, { isLoading }] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (data.find(contact => contact.name.toLowerCase() === name.toLowerCase()))
      return alert(`${name} is already in contacts.`);
    try {
      await addContact({ name, number });
      toast.success('The contact has been added to the phonebook', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.error("The contact can't be added to the phonebook");
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Loader />}
        Add contact
      </Button>
    </form>
  );
}
