import styled from "styled-components";

export const ShiftsCard = styled.div`
  position: relative;
  width: 600px;
  min-height: 100px;
  background-color: rgb(250, 250, 250, 0.8);
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr;
  text-align: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 1024px) {
    width: 420px;
    height: 120px;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: 50px 1fr 1fr;
  }

  @media (max-width: 460px) {
    width: 300px;
    height: 120px;
    grid-template-columns: 50% 1fr;
    grid-template-rows: 50px 1fr 1fr;
  }
`;

export const ShiftsCardColumn = styled.div`
  ${({ column }) => {
    switch (column) {
      case "one":
      case "two":
      case "tree":
      case "four":
      case "five":
      case "six":
        return `
        width: 100%;
        height : 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        p,
        h2,
        span {
          margin: 0;
          padding: 0;
          font-size: 1rem;
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
        width : 150px;        
        p {
          font-size: 1.5rem;
          border : 1px solid black;
          border-radius : 10px;
          width : 80px;
        }
        `;
      case "two":
        return `
        grid-column: 2;
        grid-row: 1;
        border-bottom : 1px solid black;
        h2{
          font-size: 1.5rem;
        }
        `;
      case "tree":
        return `        
        grid-column: 3;
        grid-row: 1;
        p{
          font-size: 1.3rem;
        }
        `;
      case "four":
        return `
        grid-column: 4;
        grid-row: 1;
        border-left: 1px solid black;
        p{
          font-size: 1.3rem;
        }
        `;
      case "five":
        return `
        grid-column: 1/4;
        grid-row: 2;
        display : flex;        
        justify-content : space-evenly;
        span{
          font-size: 1rem;
          background-color : rgb(0,0,0,0.7);
          padding : 5px 10px 5px 10px;    
          color : white; 
          border-radius: 10px;
        }
        `;
      case "six":
        return `
        border-left: 1px solid black;
        grid-column: 4;
        grid-row: 2;
        `;
      default:
        break;
    }
  }}

  @media (max-width: 1024px) {
    ${({ column }) => {
      switch (column) {
        case "one":
          return `
          grid-column: 1;
          grid-row: 1/3;
          `;
        case "two":
          return `
          grid-column: 2;
          grid-row: 1/3;
          border: none;
          `;
        case "tree":
          return `     
            border-left: 1px solid black;   
            grid-column: 3;
            grid-row: 1;
          `;
        case "four":
          return `
          grid-column: 3;
          grid-row: 2;
          `;
        case "five":
          return `
          grid-column: 1/3;
          grid-row: 3;
          `;
        case "six":
          return `
          grid-column: 3;
          grid-row: 3;
          `;
        default:
          break;
      }
    }}
  }

  @media (max-width: 460px) {
    height: 100%;

    ${({ column }) => {
      switch (column) {
        case "one":
          return `
          grid-column: 1;
          grid-row: 1;
          border-bottom: 1px solid black;
        `;
        case "two":
          return `
          grid-column: 2;
          grid-row: 1;
          border-bottom: 1px solid black;
        `;
        case "tree":
          return `
          grid-column: 1;
          grid-row: 2;
        `;
        case "four":
          return `
          grid-column: 2;
          grid-row: 2;
        `;
        case "five":
          return `
          display: flex;
          flex-direction : row;
          grid-column: 1;
          grid-row: 3;
          background-color : rgb(0,0,0,0.3);
          gap: 25px;
          overflow-x: scroll;
        `;
        case "six":
          return `
          grid-column: 2;
          grid-row: 3;
          background-color : rgb(0,0,0,0.3);
          background-color :none;
        `;
        default:
          break;
      }
    }}
  }
`;
