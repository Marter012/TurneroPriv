import styled from "styled-components";

export const ShiftsCard = styled.div`
  position: relative;
  width: 80%;
  min-height: 100px;
  background-color: rgb(250, 250, 250, 0.8);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  cursor: default;

  .one {
    grid-column: 1;
    grid-row: 3/5;
    p {
      font-size: 1.5rem;
    }
  }
  .two {
    grid-column: 1;
    grid-row: 1/3;
    h2 {
      font-size: 1.5rem;
    }
  }
  .tree {
    border-left: 1px solid black;
    grid-column: 2;
    grid-row: 2;
    p {
      font-size: 1.3rem;
    }
  }
  .four {
    border-left: 1px solid black;
    grid-column: 2;
    grid-row: 1;
    p {
      font-size: 1.3rem;
    }
  }
  .five {
    display: none;
  }
  .six {
    border-left: 1px solid black;
    grid-column: 2;
    grid-row: 3/5;
  }

 
`;

export const ShiftsCardColumn = styled.div`
  width: 100%;
  height: 100%;
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
