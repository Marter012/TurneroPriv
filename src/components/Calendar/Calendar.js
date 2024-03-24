import React, { useState } from "react";
import Calendar from "https://cdn.skypack.dev/react-calendar@4.0.0";
import { WrapperCalendar } from "./CalendarStyles";

const MontserratCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
      <Calendar value={date} onChange={setDate} locale="en" calendarType="US" />
  );
};

const Calendar1 = () => {
  return (
    <WrapperCalendar className="hola">
      <MontserratCalendar />
    </WrapperCalendar>
  );
};

export default Calendar1;
