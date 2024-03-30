import { styled } from "styled-components";

export const ContainerDay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  border: 1px solid black;
  background-color: rgb(200, 150, 160, 0.8);

  h3 {
    width: 100%;
    height: 10%;
    margin: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
  }
`;

export const ContainerShifts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const ShiftDay = styled.div`
  width: 90%;
  height: 30px;
  background-color: beige;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p,
  span {
    margin: 0%;
  }
`;
