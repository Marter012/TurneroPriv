import React, { useState } from "react";
import { SemanalContainer, SemanalWrapper } from "./SemanalStyles";
import Day from "../../components/Day/Day";
import { dayWeeks } from "../../utils/daysWeek";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import DatePickerUI from "../../components/DatePicker/DatePicker";
import { useActiveGetShifts } from "../../components/useHook/useActiveGetShifts";
import CardShift from "../../components/Cards/CardsShift/CardShift";
import CardUpdateShift from "../../components/Cards/CardUpdateShift/CardUpdateShift";

const Semanal = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);

  const shifts = useSelector((state) => state.shifts?.listShiftsDay);
  const [listShifts, setListShifts] = useState([...shifts]);
  useActiveGetShifts(selectedDay, setListShifts);

  const hiddenShift = useSelector((state) => state.selectedShifts.hidden);

  const shiftSelected = useSelector(
    (state) => state.selectedShifts.shiftSelected
  );
  const activatorUpdate = useSelector((state) => state.updateShift.activator);

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
              activeDay={dayjs(selectedDay).format("YYYY-MM-DD") === nextDay}
              day={day}
              nextDay={
                (nextDay = dayjs(dayjs(selectedDay).startOf("week"))
                  .add(id, "day")
                  .format("YYYY-MM-DD")
                  .toString())
              }
              key={id}
              shiftsDay={listShifts?.filter(
                (item) =>
                  item.date === dayjs(nextDay).format("YYYY-MM-DD") &&
                  item.state === true
              )}
            />
          );
        })}
        {hiddenShift && (
          <CardShift hiddenShift={hiddenShift} item={shiftSelected} />
        )}
        {activatorUpdate && (
          <CardUpdateShift activatorUpdate={activatorUpdate} />
        )}
      </SemanalContainer>
    </SemanalWrapper>
  );
};

export default Semanal;
