import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("name");
  const [phone, setPhone] = useState("phone")
  const [email, setEmail] = useState("email");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    if (!props.contacts) {
      setDuplicate(() => false)
    } else {
      setDuplicate(() => {
        const check = props.contacts.some(contact => contact.name === name)//if a single one of the contacts matches we will return true for duplicate
        return check;
      })
    } 
  }, [name])//check if name gets changed

  //updating our states
  const handleNameChange = e => setName(() => e.target.value)
  const handlePhoneChange = e => setPhone(() => e.target.value)
  const handleEmailChange = e => setEmail(() => e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
    if(!duplicate) {
      props.addContact(name, phone, email);

      setName(() => "name")
      setPhone(() => "phone")
      setEmail(() => "email")
      setDuplicate(() => false)
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        props={{
          name: name,
          phone: phone,
          email: email,
          handleNameChange: handleNameChange,
          handlePhoneChange: handlePhoneChange,
          handleEmailChange: handleEmailChange,
          handleSubmit: handleSubmit
      }} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
