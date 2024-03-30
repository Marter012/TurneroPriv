import React from "react";
import { WrapperShifts } from "./SectionsShiftsStyled";
import ListShifts from "../ListShifts/ListShifts";
import ActionsShifts from "../ActionsShifts/ActionsShifts";
import NavShists from "../NavShists/NavShists";

const SectionsShifts = () => {
  return (
    <WrapperShifts>
      <NavShists/>      
      <ListShifts />
      <ActionsShifts/>
    </WrapperShifts>
  );
};

export default SectionsShifts;
