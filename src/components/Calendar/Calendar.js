import React, { useState } from "react";
import Calendar from "https://cdn.skypack.dev/react-calendar@4.0.0";
import { useDispatch } from "react-redux";
import { WrapperCalendar } from "./CalendarStyles";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";

const MontserratCalendar = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  dispatch(SelectDay(dayjs(date)));
  return (
    <Calendar
      formatShortWeekday={(locale, dateValue) =>
        ["D", "L", "M", "M", "J", "V", "S"][dateValue.getDay()]
      }
      value={date}
      onChange={setDate}
      locale="es"
      calendarType="US"
    />
  );
};

const Calendar1 = ({ mobileState }) => {
  console.log(mobileState);
  return (
    <WrapperCalendar mobileState={mobileState}>
      <MontserratCalendar />
    </WrapperCalendar>
  );
};

export default Calendar1;
