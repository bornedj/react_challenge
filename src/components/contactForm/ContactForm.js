import React from "react";

export const ContactForm = ({props}) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.name} onChange={e => props.setName(e.target.value)} />
      <input type="tel" value={props.phone} onChange={e => props.setPhone(e.target.value)} />
      <input type="email" value={props.email} onChange={e => props.setEmail(e.target.value)} />
      <input type="submit" value="submit" />
    </form>
  )
} 
