import React from "react";
import {
  ContainerTableCustomerRegistrationsColumn,
  RowsTableCustomerRegistrations,
} from "./TableCustomerRegistrarionStyles";

const TableCustomerRegistrationsRows = ({date,activity,price}) => {
  return (
    <RowsTableCustomerRegistrations>
      <ContainerTableCustomerRegistrationsColumn $orderTable="one">
        <p>{date}</p>
      </ContainerTableCustomerRegistrationsColumn>
      <ContainerTableCustomerRegistrationsColumn $orderTable="two">
        <p>{activity}</p>
      </ContainerTableCustomerRegistrationsColumn>
      <ContainerTableCustomerRegistrationsColumn $orderTable="three">
        <p>{price}</p>
      </ContainerTableCustomerRegistrationsColumn>
    </RowsTableCustomerRegistrations>
  );
};

export default TableCustomerRegistrationsRows;
