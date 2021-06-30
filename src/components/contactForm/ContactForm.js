import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text">{props.name}</input>
      <input type="tel">{props.phone}</input>
      <input type="email">{props.email}</input>
      <input type="submit"></input>
    </form>
  );
};
