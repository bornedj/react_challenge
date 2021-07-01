import React from "react";

export const ContactPicker = ({props}) => {
  return (
    <select>
      <option key="0" selected="selected" value="">Please select a contact</option>
      {props.contacts.map((contact, idx) => {
        return <option key={idx + 1} value={contact}>{contact.name}</option>
      })}
    </select>
  );
};
