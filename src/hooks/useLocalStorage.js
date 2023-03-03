import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });


  useEffect(() => {
  
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};




  // useEffect(() => {
  //   const contacts = JSON.parse(window.localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setContacts({
  //       contacts,
  //     });
  //   }
  // }, [contacts, setContacts]);

  // useEffect(() => {
  //   if (!contacts) return;
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // });