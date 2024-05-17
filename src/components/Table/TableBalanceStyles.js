import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  /* .MuiDataGrid-row{
        background-color: red;
        &:hover{
            background-color: blue;
        }
    }
    .MuiDataGrid-row::after{
        background-color: blue !important;
    } */
`;

export const ContainerTableShifts = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 70% 20%;
  background-color: rgb(250, 250, 250, 0.5);
`;

export const BoxColumns = styled.div`
  grid-row: 1;
  overflow: hidden;
`;

export const BoxRows = styled.div`
  grid-row: 2;
  overflow: hidden;
`;

export const ContainerTableShiftsColumns = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ContainerTableShiftsRows = styled(ContainerTableShiftsColumns)`
  background-color: rgb(0, 0, 0, 0.4);
  color: white;
  height: 10%;

  padding-top: 5px;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 1rem;
  font-weight: 100;
`;

export const ContainerTableShiftsColumn = styled.div`
  text-align: start;

  ${({ orderTable }) => {
    switch (orderTable) {
      case "one":
        return `
            grid-column: 1;
            text-align: center;
        `;
      case "two":
        return `
            grid-column: 2;
        `;
      case "three":
        return `
            grid-column: 3;
        `;
      case "four":
        return `
            grid-column: 4;
        `;
      case "five":
        return `
            grid-column: 5;
        `;
      default:
        break;
    }
  }}
`;

export const ContainerTableDataShifts = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  span {
    font-size: 1.7rem;
    margin: 0;
    padding: 0;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    p {
      border-bottom: 1px solid white;
    }
  }
`;
