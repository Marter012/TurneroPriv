import React from "react";
import { WrapperShifts } from "./SectionsShiftsStyled";
import ListShifts from "../ListShifts/ListShifts";
import ActionsShifts from "../ActionsShifts/ActionsShifts";
import NavShists from "../NavShists/NavShists";


export let actividades

const SectionsShifts = ({mobileState}) => {
  console.log(mobileState)

  return (
    <WrapperShifts mobileState={mobileState}>
      <NavShists/>      
      <ListShifts />
      <ActionsShifts/>
    </WrapperShifts>
  );
};

export default SectionsShifts;
