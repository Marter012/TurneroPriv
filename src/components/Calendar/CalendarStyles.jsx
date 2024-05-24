import styled from "styled-components";

export const WrapperCalendar = styled.div`
  margin: 0;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const ContainerMontserrat = styled.div`
  position: absolute;
  width: 40vw;
  left: 0;
  ${({ hiddenCalendar }) =>
    hiddenCalendar
      ? " transform : translateX(-40vw);transition-duration: 1s;"
      : "transform : translateX(+60px);transition-duration: 1s;"}
  z-index: +7;

  @media (max-width: 768px) {
    width: 50vw;
    ${({ hiddenCalendar }) =>
      hiddenCalendar
        ? " transform : translateX(-50vw);transition-duration: 1s;"
        : "transform : translateX(+60px);transition-duration: 1s;"}
  }
  @media (max-width: 460px) {
    width: 90vw;
    left: 5vw;
    ${({ hiddenCalendar }) =>
      hiddenCalendar
        ? " transform : translateX(-95vw);transition-duration: 1s;"
        : "transform : translateX(0);transition-duration: 1s;"}
  }
`;

export const CalendarMenu = styled.div`
  svg{
    display : none;
  }
  @media (max-width: 460px) {
    position: absolute;
    left: 0;
    font-size: 3rem;
    z-index: +8;
    bottom: 0;
    color: white;
    svg{
    display : flex;
  }
  }
`;

export const CalendarMenuItems = styled.div`
  width: 60px;
  height: 80vh;
  position: absolute;
  top: 10vh;
  justify-content: space-around;
  background-color: rgb(250, 250, 250, 0.5);
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: +8;
  left: -1%;
  color: white;
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    height: 75vh;
    top: 12vh;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;
