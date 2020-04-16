import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

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
        type: 'Professional',
        _id: '5e97ed3afe0b9d301c133d65',
        name: 'Devinder Singh',
        email: 'devindersingh79904@gmail.com',
        phone: '76965-55536',
        user: '5e97e94522b51374585302fb',
        date: '2020-04-16T05:29:30.748Z',
        __v: 0,
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contacts

  const addContact = (contact) => {
    contact._id = v4();

    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  //set Current

  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };
  //Clear Current

  const clearCurrent = (contact) => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };
  // Update Contact

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  const filterClear = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        filterClear,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
