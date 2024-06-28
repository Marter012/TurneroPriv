import React from "react";
import { ContainerNavShifts } from "./NavShistsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { useDispatch } from "react-redux";
import { selectedNavShifts } from "../../redux/SelectedShifts/SelectedShifts";

const NavShists = () => {
  const dispatch = useDispatch();
  return (
    <ContainerNavShifts>
      <ButtonStyles
        onClick={() => {
          dispatch(selectedNavShifts(1));
        }}
      >
        Turnos
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
