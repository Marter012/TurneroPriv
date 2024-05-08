import React from "react";
import { SemanalContainer, SemanalWrapper } from "./SemanalStyles";
import Day from "../../components/Day/Day";
import { dayWeeks } from "../../utils/daysWeek";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import DatePickerUI from "../../components/DatePicker/DatePicker";
import { useActiveGetShifts } from "../../components/useHook/useActiveGetShifts";

const Semanal = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  useActiveGetShifts();
  const shifts = useSelector((state) => state.shifts.listShifts);
  console.log(shifts);
  return (
    <SemanalWrapper>
      <DatePickerUI />
      <SemanalContainer>
        {dayWeeks.map(({ day, id }) => {
          let nextDay = dayjs(dayjs(selectedDay).startOf("week"))
            .add(id, "day")
            .format("YYYY-MM-DD")
            .toString();
          return (
            <Day
              key={id}
              activeDay={dayjs(selectedDay).format("YYYY-MM-DD") === nextDay}
              day={day}
              nextDay={
                (nextDay = dayjs(dayjs(selectedDay).startOf("week"))
                  .add(id, "day")
                  .format("YYYY-MM-DD")
                  .toString())
              }
              shiftsDay={shifts?.filter(
                (item) =>
                  item.date === dayjs(nextDay).format("YYYY-MM-DD") &&
                  item.state === true
              )}
            />
          );
        })}
      </SemanalContainer>
    </SemanalWrapper>
  );
};

export default Semanal;
