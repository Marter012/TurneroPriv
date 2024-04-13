import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "./DatePickerStyles.css";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";

const DatePickerUI = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  const formatDay = dayjs(selectedDay);
  const [Cdate, setDate] = useState(selectedDay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SelectDay(dayjs(Cdate)));
  }, [Cdate, dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
      >
        <MobileDatePicker
          className="Picker"
          format="DD / MM / YYYY"
          defaultValue={formatDay}
          onChange={(e) => {
            setDate(new Date(e));
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
