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

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 460px) {
    min-width: 150px;
  }
`;

export const ContainerDayWeek = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ activeDay }) =>
    activeDay ? "rgb(250,250,250)" : "rgb(250,250,250,0.5)"};
  h3,
  p {
    margin: 0%;
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
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const ShiftDay = styled.div`
  width: 90%;
  height: 50px;
  background-color: beige;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  align-items: center;
  p,
  span {
    margin: 0%;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    p,
    span {
      font-size: 1rem;
    }
  }
`;
