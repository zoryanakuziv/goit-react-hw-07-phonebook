import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contacts, Contact, Button } from "./Contacts.styled";
import { deleteContact } from "../../redux/contacts/contacts-slice";
import {
  contactsSelector,
  filterSelector,
} from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const filterValue = useSelector(filterSelector);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  return (
    <Contacts>
      {filteredContacts().map((contact) => (
        <Contact key={contact.id}>
          <span>
            {contact.name} : {contact.number}
          </span>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </Contacts>
  );
};
export default ContactList;
