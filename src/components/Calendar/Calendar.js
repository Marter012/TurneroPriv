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
    <Calendar value={date} onChange={setDate} locale="en" calendarType="US" />
  );
};

const Calendar1 = ({mobileState}) => {
  console.log(mobileState)
  return (
    <WrapperCalendar mobileState={mobileState}>
      <MontserratCalendar />
    </WrapperCalendar>
  );
};

export default Calendar1;
