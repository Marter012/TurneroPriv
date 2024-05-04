import styled from "styled-components";

export const ShiftsCard = styled.div`
  position: relative;
  width: 600px;
  min-height: 100px;
  background-color: rgb(250, 250, 250, 0.8);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  align-items: center;
  border-radius: 20px;
`;

export const ShiftsCardColumn = styled.div`
  ${({ column }) => {
    switch (column) {
      case "one":
      case "two":
      case "tree":
      case "four":
        return `        
        font-size: 1rem;
        display : flex;
        justify-content : center;
        h2 {
          width: 40%;
          font-size: 1.4rem;
          color: black;
          margin: 0;
        }
        p {
          font-weight: 600;
          margin: 0;
        }
        `;
      case "five":
      case "six":
        return `
        height: 60%;
        padding : 5px;
        display : flex;
        justify-content: center;
        background-color: rgb(0, 0, 0, 0.5);
        align-items: center;
        p {
          font-size: 1rem;
          margin: 0%;
          background-color: rgb(0, 0, 0, 0.5);
          padding: 20px;
          color : white;
          padding-top: 5px;
          padding-bottom: 5px;
          border-radius: 10px;
        }
        `;
      default:
        break;
    }
  }}

  ${({ column }) => {
    switch (column) {
      case "one":
        return `
        grid-column: 1;
        grid-row: 1;
        width : 100%;
        p {
          font-size: 1.4rem;
          border : 1px solid black;
          border-radius : 10px;
          width : 80px;
        }
        `;
      case "two":
        return `
        width : 250px;
        grid-column: 2/3;
        grid-row: 1;
        border-bottom : 1px solid black;
        `;
      case "tree":
        return `
        grid-column: 3;
        grid-row: 1;
        `;
      case "four":
        return `
        grid-column: 4;
        grid-row: 1;
        `;
      case "five":
        return `
        grid-column: 1/4;
        grid-row: 1;
        display : flex;
        justify-content : space-evenly;
        `;
      case "six":
        return `
        grid-column: 5/4;
        grid-row: 1;
        `;
      default:
        break;
    }
  }}
`;

export const ShiftsCardBottom = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column: 1/5;
  grid-auto-columns: minmax(100px, auto) minmax(150px, auto);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
