import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({props}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
    if(!duplicate) {
      props.addContact(name, phone, email);

      setName(() => "")
      setPhone(() => "")
      setEmail(() => "")
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
        <ContactForm props={{
          name: name,
          phone: phone,
          email: email,
          setName: setName,
          setPhone: setPhone,
          setEmail: setEmail,
          handleSubmit: handleSubmit
      }} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList props={props.contacts} />
      </section>
    </div>
  );
};
