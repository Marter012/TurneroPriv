import React, { useState } from "react";
import { ListShiftsContainer, ListShiftsWrapper } from "./ListShiftsStyles";
import { useSelector } from "react-redux";
import { useActiveGetShifts } from "../useHook/useActiveGetShifts";
import Shifts from "../Shifts/Shifts";
import dayjs from "dayjs";
import DatePickerUI from "../DatePicker/DatePicker";
import CardShift from "../Cards/CardsShift/CardShift";

const ListShifts = () => {
  const selectDay = useSelector((state) => state.selectDay.day);
  const shifts = useSelector((state) => state.shifts?.listShiftsDay);
  const hiddenShift = useSelector((state) => state.selectedShifts.hidden);

  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const [lett, setlett] = useState([...shifts]);
  useActiveGetShifts(selectDay, setlett);
  const shiftSelected = useSelector(
    (state) => state.selectedShifts.shiftSelected
  );

  lett.sort(function (a, b) {
    return (
      a.schedule.split(":").map((item) => parseInt(item))[0] +
      a.schedule.split(":").map((item) => parseInt(item))[1] / 60 -
      (b.schedule.split(":").map((item) => parseInt(item))[0] +
        b.schedule.split(":").map((item) => parseInt(item))[1] / 60)
    );
  });
  return (
    <ListShiftsWrapper selectedNav={selectedNav === 1}>
      <DatePickerUI />

      <ListShiftsContainer>
        {lett &&
          lett
            ?.filter((item) => {
              return (
                item.date === dayjs(selectDay).format("YYYY-MM-DD") &&
                item.state === true
              );
            })
            .map((item) => {
              return (
                <Shifts
                  onClick={() => console.log("hola")}
                  key={item.code}
                  {...item}
                />
              );
            })}
      </ListShiftsContainer>
      {hiddenShift && (
        <CardShift hiddenShift={hiddenShift} item={shiftSelected} />
      )}
    </ListShiftsWrapper>
  );
};

export default ListShifts;
