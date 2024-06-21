import React from "react";
import { ContainerNavShifts } from "./NavShistsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { selectedNavShifts } from "../../redux/SelectedShifts/SelectedShifts";

const NavShists = () => {
  const selectedDay = useSelector((state) => state.selectDay.day);
  const formatDay = dayjs(selectedDay).format(`DD / MM`);
  const dispatch = useDispatch();
  return (
    <ContainerNavShifts>
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
        Agendar Turno
      </ButtonStyles>
    </ContainerNavShifts>
  );
};

export default NavShists;
