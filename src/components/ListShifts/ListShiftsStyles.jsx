import styled from "styled-components";

export const ListShiftsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: ${({selected})=> selected ? "flex" : "none"};
  justify-content: center;
  align-items: center;  
`;

export const ListShiftsContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;
`;
