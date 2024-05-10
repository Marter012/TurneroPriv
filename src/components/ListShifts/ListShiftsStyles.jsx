import styled from "styled-components";

export const ListShiftsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250, 0.3);
  justify-content: center;
  align-items: center;
  scrollbar-color: transparent transparent;

  @media (max-width: 768px) {
    display: ${({ selectedNav }) => (selectedNav ? "flex" : "none")};
    background-color: transparent;
    margin-top: 5vh;
    height: 95vh;
  }
`;

export const ListShiftsContainer = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: start;

  gap: 10px;
  align-items: center;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
`;
