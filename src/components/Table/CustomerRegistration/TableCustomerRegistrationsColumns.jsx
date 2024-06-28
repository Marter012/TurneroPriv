import React from "react";
import { ColumnsTableCustomerRegistrations,ContainerTableCustomerRegistrationsColumn } from "./TableCustomerRegistrarionStyles";

const TableCustomerRegistrationsColumns = () => {
  return (
    <ColumnsTableCustomerRegistrations>
      <ContainerTableCustomerRegistrationsColumn $orderTable="one">
        <p>Fecha</p>
      </ContainerTableCustomerRegistrationsColumn>
      <ContainerTableCustomerRegistrationsColumn $orderTable="two">
        <p>Actividad</p>
      </ContainerTableCustomerRegistrationsColumn>
      <ContainerTableCustomerRegistrationsColumn $orderTable="three">
        <p>Precio</p>
      </ContainerTableCustomerRegistrationsColumn>
     </ColumnsTableCustomerRegistrations>
  );
};

export default TableCustomerRegistrationsColumns;
