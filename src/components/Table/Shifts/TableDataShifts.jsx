import React from "react";
import { ContainerTableDataShifts } from "../TableBalanceStyles";

const TableDataShifts = ({ listShifts }) => {
  listShifts.filter(item => console.log(item.date.split("-")[1]))
  return (
    <ContainerTableDataShifts>
      <div>
        <span>Balance Mensual </span>
      </div>
      <div>
        <p>N° de Turnos : {listShifts.length}</p>
        <p>Ganancia Neta : {0}</p>
        <p>
          Ganancia Bruta : {listShifts.reduce((acc, aux) => acc + aux.price, 0)}
        </p>
      </div>
    </ContainerTableDataShifts>
  );
};

export default TableDataShifts;
