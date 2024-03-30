import styled from "styled-components";

export const ListShiftsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: ${({selected})=> selected ? "flex" : "none"};
  justify-content: center;
  align-items: center;  
  h2 {
    color: white;
    font-size: 2rem;
  }
`;

export const ListShiftsContainer = styled.div`
  width: 90%;
  height: 90%;
  display: grid;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5%;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
`;
