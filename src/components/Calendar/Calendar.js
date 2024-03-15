import React, { useState } from "react";
import Calendar from "https://cdn.skypack.dev/react-calendar@4.0.0";

const MontserratCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar value={date} onChange={setDate} locale="en" calendarType="US" />
    </div>
  );
};

const Calendar1 = () => {
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100%",
      }}
    >
      <MontserratCalendar />
    </div>
  );
};

export default Calendar1;
