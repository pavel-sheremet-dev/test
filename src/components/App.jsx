import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './App.Stuled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length !== 0 && <Filter />}
          <ContactList />
          {contacts.length === 0 && !loading && (
            <p>There are no contacts yet.</p>
          )}
        </Section>
      </Container>
      {contacts.length === 0 && loading && <Loader />}
    </>
  );
};
