import React from "react";
import { ContainerTableShiftsColumn, ContainerTableShiftsRows } from "../TableBalanceStyles";

const TableShiftsRows = ({name,price,schedule,date}) => {
  return (
    <ContainerTableShiftsRows>
      <ContainerTableShiftsColumn orderTable="one">123232</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="two">{date}</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="three">{schedule}</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="four">{name}</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="five">${price}</ContainerTableShiftsColumn>
    </ContainerTableShiftsRows>
  );
};

export default TableShiftsRows;
