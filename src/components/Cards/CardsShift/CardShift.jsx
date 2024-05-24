import React from "react";
import Shifts from "../../Shifts/Shifts";
import { ContainerCardShift } from "./CardShiftStyles";
import { ModalOverlayStyled } from "../../Header/HeaderStyles";
import { useDispatch } from "react-redux";
import { toggleShifts } from "../../../redux/SelectedShifts/SelectedShifts";

const CardShift = ({ item }, hiddenShift) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContainerCardShift>
        <Shifts {...item} />
      </ContainerCardShift>
      {hiddenShift && (
        <ModalOverlayStyled
          s_zIndex={10}
          onClick={() => dispatch(toggleShifts())}
          hiddenMenu={!hiddenShift}
        />
      )}
    </>
  );
};

export default CardShift;
