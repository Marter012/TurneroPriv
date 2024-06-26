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
    display: ${({ $selectedNav }) => ($selectedNav ? "flex" : "none")};
    background-color: transparent;
    margin-top: 5%;
    height: 95%;
  }
`;

export const ListShiftsContainer = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  padding-top: 15px;
  flex-direction: column;
  justify-content: start;

  gap: 10px;
  align-items: center;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  position: relative;
  .txt {
    width: 100%;
    background-color: rgb(250,250,250,0.5);
    text-align: center;
    position: absolute;
    font-size: 2rem;
    font-weight: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
