import React from "react";
import {
  BoxTableCustomerRegistrations,
  ContainerTableCustomerRegistrarion,
} from "./TableCustomerRegistrarionStyles";
import TableCustomerRegistrationsColumns from "./TableCustomerRegistrationsColumns";
import TableCustomerRegistrationsRows from "./TableCustomerRegistrationsRows";
import { useSelector } from "react-redux";

const TableCustomerRegistrarion = () => {
  const shifts = useSelector((state) => state.shifts.listShifts);
  const customer = useSelector((state) => state.customers.customerSelected);

  const activities = shifts.filter((item) => item.phone === customer.phone);
  
  return (
    <ContainerTableCustomerRegistrarion>
      <TableCustomerRegistrationsColumns />
      <BoxTableCustomerRegistrations>
        {customer.length === 0 ? (
          <p>No hay un cliente seleccionado.</p>
        ) : (
          activities.map((activity) => {
           return <TableCustomerRegistrationsRows key={activity.code} {...activity} />;
          })
        )}
      </BoxTableCustomerRegistrations>
    </ContainerTableCustomerRegistrarion>
  );
};

export default TableCustomerRegistrarion;
