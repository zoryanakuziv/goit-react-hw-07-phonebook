import Container from "../container/Container";
import Form from "../form/Form";
import Filter from "../filter/Filter";
import ContactList from "../contacts/Contacts";

export default function App() {
  return (
    <Container>
      <Form />
      <Filter />
      <ContactList />
    </Container>
  );
}
