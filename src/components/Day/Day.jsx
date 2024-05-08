import React from "react";
import { ContainerDay, ContainerShifts, ShiftDay } from "./DayStyles";

const Day = ({ day, nextDay, activeDay, shiftsDay }) => {
  const formateDate  = `${nextDay.split("-")[2]}-${nextDay.split("-")[1]}`
  return (
    <ContainerDay activeDay={activeDay}>
      <h3>{`${day} ${formateDate}`}</h3>
      <ContainerShifts>
        {shiftsDay.map((item) => {
          return (
            <>
            <ShiftDay>
              <p>{item.name}</p>
              <span>{item.schedule}</span>
            </ShiftDay></>
          );
        })}
      </ContainerShifts>
    </ContainerDay>
  );
};

export default Day;
