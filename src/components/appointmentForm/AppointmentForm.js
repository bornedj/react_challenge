import React, { PureComponent } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({ props }) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.title} onChange={e => props.setTitle(e.target.value)} />
      <input type="date" value={props.date} min={getTodayString()} onChange={e => props.setDate(e.target.value)} />
      <input type="time" value={props.time} onChange={e => props.setTime(e.target.value)} />
      <ContactPicker props={{
        contacts: props.contacts,
        setContact: props.setContact
        }}/>
      <input type="submit" value="submit" />
    </form>
  );
};
