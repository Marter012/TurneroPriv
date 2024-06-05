import React from "react";
import {
  ContainerDay,
  ContainerDayWeek,
  ContainerShifts,
  ShiftDay,
} from "./DayStyles";
import { useDispatch } from "react-redux";
import {
  selectedShift,
  toggleShifts,
} from "../../redux/SelectedShifts/SelectedShifts";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";

const Day = ({ day, nextDay, activeDay, shiftsDay }) => {
  const formateDate = `${nextDay.split("-")[2]}-${nextDay.split("-")[1]}`;
  const dispatch = useDispatch();

  const updateShiftSelected = (item) => {
    dispatch(selectedShift(item));
    dispatch(toggleShifts(true));
  };
  return (
    <ContainerDay activeDay={activeDay}>
      <ContainerDayWeek onClick={(e) => dispatch(SelectDay(dayjs(nextDay)))}>
        <h3>{day}</h3>
        <p>{formateDate}</p>
      </ContainerDayWeek>
      <ContainerShifts>
        {shiftsDay.map((item) => {
          return (
            <>
              <ShiftDay
                onClick={() => {
                  updateShiftSelected(item);
                }}
                key={item.name}
              >
                <p>{item.name.split(" ")[0].toUpperCase()}</p>
                <span>{item.schedule}</span>
              </ShiftDay>
            </>
          );
        })}
      </ContainerShifts>
    </ContainerDay>
  );
};

export default Day;
