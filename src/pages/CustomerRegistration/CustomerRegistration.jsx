import React from "react";
import {
  ContainerCustomerRegistration,
  CustomerRegistrationWrapper,
} from "./CustomerRegistrationStyles";
import TableCustomerRegistrarion from "../../components/Table/CustomerRegistration/TableCustomerRegistrarion";
import Searcher from "../../components/Searcher/Searcher";

const CustomerRegistration = () => {
  return (
    <CustomerRegistrationWrapper>
      <Searcher/>
      <ContainerCustomerRegistration>
        <TableCustomerRegistrarion />
      </ContainerCustomerRegistration>
    </CustomerRegistrationWrapper>
  );
};

export default CustomerRegistration;
