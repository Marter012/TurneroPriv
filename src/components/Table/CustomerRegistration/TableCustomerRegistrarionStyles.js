import styled from "styled-components";

export const ContainerTableCustomerRegistrarion = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ColumnsTableCustomerRegistrations = styled.div`
  width: 100%;
  height: 10%;
  background-color: rgb(250, 250, 250, 0.8);
  display: grid;
  font-weight: 600;
`;

export const ContainerTableCustomerRegistrationsColumn = styled.div`
  text-align: center;
  font-size: 1rem;

  ${({ $orderTable }) => {
    switch ($orderTable) {
      case "one":
        return `
          grid-column: 1;
      `;
      case "two":
        return `
          grid-column: 2;
      `;
      case "three":
        return `
          grid-column: 3;
      `;
      default:
        break;
    }
  }}
`;

export const BoxTableCustomerRegistrations = styled.div`
  width: 100%;
  height: 90%;
  background-color: rgb(250, 250, 250, 0.6);
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  font-weight: 400;
  color: white;
`;

export const RowsTableCustomerRegistrations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.4);
  margin-top: 5px;
`;
