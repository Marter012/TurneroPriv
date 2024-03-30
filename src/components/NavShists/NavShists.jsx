import React from "react";
import { ContainerNavShifts } from "./NavShistsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectedNavShifts } from "../../redux/NavShifts/NavShiftsSlicer";

const NavShists = () => {
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const dispatch = useDispatch();
  console.log(selectedNav);
  return (
    <ContainerNavShifts>
      <ButtonStyles
        onClick={() => {
          dispatch(selectedNavShifts(1));
        }}
      >
        Observar dia {2}
      </ButtonStyles>
      <ButtonStyles
        onClick={() => {
          dispatch(selectedNavShifts(2));
        }}
      >
        Agendar dia {2}
      </ButtonStyles>
    </ContainerNavShifts>
  );
};

export default NavShists;
