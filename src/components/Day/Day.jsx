import React from "react";
import { ContainerDay, ContainerShifts, ShiftDay } from "./DayStyles";

const Day = ({ day, date,activeDay }) => {

  return (
    <ContainerDay activeDay={activeDay} >
      <h3>{`${day} ${date}`}</h3>
      <ContainerShifts >
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
          <span>14:30hs</span>
          <p>Martin</p>
        </ShiftDay>
      </ContainerShifts>
    </ContainerDay>
  );
};

export default Day;
