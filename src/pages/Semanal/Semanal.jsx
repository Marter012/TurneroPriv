import React from "react";
import { SemanalContainer, SemanalWrapper } from "./SemanalStyles";
import Day from "../../components/Day/Day";
import { dayWeeks } from "../../utils/daysWeek";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import DatePickerUI from "../../components/DatePicker/DatePicker";

const Semanal = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  return (
    <SemanalWrapper>
      <DatePickerUI />
      <SemanalContainer>
        {dayWeeks.map(({ day, id }) => {
          let nextDay = dayjs(dayjs(selectedDay).startOf("week"))
            .add(id, "day")
            .format("DD/MM")
            .toString();

          return (
            <Day
              activeDay={dayjs(selectedDay).format("DD/MM") === nextDay}
              day={day}
              date={nextDay}
            />
          );
        })}
      </SemanalContainer>
    </SemanalWrapper>
  );
};

export default Semanal;
