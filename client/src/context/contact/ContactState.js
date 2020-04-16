import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: 'Personal',
        _id: '5e97ed3afe0b9d301c133d45',
        name: 'Pawandeep Singh',
        email: 'spawandeep39@gmail.com',
        phone: '97807-42124',
        user: '5e97e94522b51374585302fb',
        date: '2020-04-16T05:29:30.748Z',
        __v: 0,
      },
      {
        type: 'Personal',
        _id: '5e97ed1ffe0b9d301c133d44',
        name: 'Omandeep Singh',
        email: 'rmnn09@gmail.com',
        phone: '98551-55536',
        user: '5e97e94522b51374585302fb',
        date: '2020-04-16T05:29:03.201Z',
        __v: 0,
      },
      {
        type: 'Proffesional',
        _id: '5e97ed3afe0b9d301c133d65',
        name: 'Devinder Singh',
        email: 'devindersingh79904@gmail.com',
        phone: '76965-55536',
        user: '5e97e94522b51374585302fb',
        date: '2020-04-16T05:29:30.748Z',
        __v: 0,
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
