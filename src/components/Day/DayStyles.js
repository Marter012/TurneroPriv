import { styled } from "styled-components";

export const ContainerDay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  border: 1px solid black;
  background-color: ${({ activeDay }) =>
    activeDay ? "rgb(200, 150, 160)" : "rgb(200, 150, 160, 0.5)"};

  h3 {
    width: 100%;
    height: 10%;
    margin: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ activeDay }) =>
      activeDay ? "rgb(250,250,250)" : "rgb(250,250,250,0.5)"};
  }
`;

export const ContainerShifts = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const ShiftDay = styled.div`
  width: 90%;
  background-color: beige;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  p,
  span {
    margin: 0%;
    font-size: 1.1rem;
  }
`;
