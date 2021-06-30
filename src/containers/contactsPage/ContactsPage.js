import React, { useState, useEffect } from "react";

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
        const check = props.contacts.some(contact = contact.name === name)//if a single one of the contacts matches we will return true for duplicate
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
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
