import React from "react";
import {
  ContainerTableActivitiesColumn,
  ContainerTableActivitiesColumns,
} from "../TableActivitiesStyles";

const TableActivitiesColumns = () => {
  return (
    <ContainerTableActivitiesColumns>
      <ContainerTableActivitiesColumn orderTable="one">
        <p>Codigo</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="two">
        <p>Actividad</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="three">
        <p>Costo</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="four">
        <p>Precio Final</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="five">
        <p>Ganancia Neta</p>
      </ContainerTableActivitiesColumn>
    </ContainerTableActivitiesColumns>
  );
};

export default TableActivitiesColumns;
