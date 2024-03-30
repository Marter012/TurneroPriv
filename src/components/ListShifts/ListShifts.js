import React from "react";
import { ListShiftsContainer, ListShiftsWrapper } from "./ListShiftsStyles";
import Shifts from "../Shifts/Shifts";
import { useSelector } from "react-redux";

const ListShifts = () => {
  const selectedNav = useSelector(state => state.selectedShifts.selected)
  return (
    <ListShiftsWrapper selected={selectedNav === 1} >
      <ListShiftsContainer>
        <Shifts />
        <Shifts />
        <Shifts />
        <Shifts />
        <Shifts />
        <Shifts />
        <Shifts />
      </ListShiftsContainer>
    </ListShiftsWrapper>
  );
};

export default ListShifts;
