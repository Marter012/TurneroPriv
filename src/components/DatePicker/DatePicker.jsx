import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "./DatePickerStyles.css";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";

const DatePickerUI = ({formatDate = "DD / MM / YYYY"}) => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  const [Cdate, setDate] = useState(dayjs(selectedDay));
  const dispatch = useDispatch();

  useEffect(() => {
    setDate(selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    if (Cdate !== selectedDay) {
      dispatch(SelectDay(dayjs(Cdate)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cdate]);

  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
      >
        <MobileDatePicker
          className="Picker"
          format={formatDate}
          value={Cdate}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
