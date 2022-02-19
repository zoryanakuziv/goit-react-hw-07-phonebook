import { useDeleteContactMutation } from '../../redux/contacts/contacts-api';
import { Loader } from '../../components/loader/Loader';
import { Contact, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { id, name, phone } = contact;
  return (
    <Contact>
      <span>
        {name} : {phone}
      </span>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        deleting={isDeleting}
      >
        {isDeleting && <Loader />}
        Delete
      </Button>
    </Contact>
  );
};
