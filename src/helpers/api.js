import axios from 'axios';

axios.defaults.baseURL = 'https://63ffbee39f84491029841bcc.mockapi.io/api';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async (contact) => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  };

  export const deleteContact = async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`, id);
    return data;
  };