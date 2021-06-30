import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  //add new object to contacts
  const addContact = (name, phone, email) => {
    setContacts(prevContacts => ([
      ...prevContacts,
      {
        name: name,
        phone: phone,
        email: email
      }
    ]))
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prevAppointments => ([
      ...prevAppointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ]))
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage props={{
              contacts: contacts,
              addContact: contacts
            }}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage props={{
              appointments: appointments,
              addAppointment: addAppointment
            }}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
