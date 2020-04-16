import React, { Fragment } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import Contacts from '../contacts/Contacts';
const Home = () => {
  return (
    <div className='grid-2'>
      <ContactForm />
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
