import React from "react";
import { ContainerTableShiftsColumn, ContainerTableShiftsColumns } from "../TableBalanceStyles";

const TableShiftsColumns = () => {
  return (
    <ContainerTableShiftsColumns>
      <ContainerTableShiftsColumn orderTable="one">Codigo</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="two">Fecha</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="three">Nombre</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="four">Horario</ContainerTableShiftsColumn>
      <ContainerTableShiftsColumn orderTable="five">Precio</ContainerTableShiftsColumn>
    </ContainerTableShiftsColumns>
  );
};

export default TableShiftsColumns;
