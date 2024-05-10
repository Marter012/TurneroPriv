import React from "react";
import {
  ContainerDay,
  ContainerDayWeek,
  ContainerShifts,
  ShiftDay,
} from "./DayStyles";

const Day = ({ day, nextDay, activeDay, shiftsDay }) => {
  const formateDate = `${nextDay.split("-")[2]}-${nextDay.split("-")[1]}`;
  return (
    <ContainerDay activeDay={activeDay}>
      <ContainerDayWeek>
        <h3>{day}</h3>
        <p>{formateDate}</p>
      </ContainerDayWeek>
      <ContainerShifts>
        {shiftsDay.map((item) => {
          return (
            <>
              <ShiftDay key={item.name}>
                <p>{item.name}</p>
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
