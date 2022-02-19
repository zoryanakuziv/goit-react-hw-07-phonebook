import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../components/loader/Loader';
import { Contacts } from './Contacts.styled';
import { ContactItem } from '../contactItem/ContactItem';
import { useFetchContactsQuery } from '../../redux/contacts/contacts-api';
import { filterSelector } from '../../redux/filter/filter-selectors';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filterValue = useSelector(filterSelector);

  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  return (
    <Contacts>
      {isFetching && <h2>The contacts are loading...</h2>}
      {data &&
        filteredContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </Contacts>
  );
};

export default ContactList;
