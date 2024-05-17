import React from "react";
import { ContainerNavShifts } from "./NavShistsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectedNavShifts } from "../../redux/NavShifts/NavShiftsSlicer";
import dayjs from "dayjs";

const NavShists = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  const formatDay = dayjs(selectedDay).format(`DD / MM`);
  const dispatch = useDispatch();
  return (
    <ContainerNavShifts activeNavShift={false}>
      <ButtonStyles
        onClick={() => {
          dispatch(selectedNavShifts(1));
        }}
      >
        Observar dia <br /> {formatDay}
      </ButtonStyles>
      <ButtonStyles
        onClick={() => {
          dispatch(selectedNavShifts(2));
        }}
      >
        Agendar dia <br /> {formatDay}
      </ButtonStyles>
    </ContainerNavShifts>
  );
};

export default NavShists;
