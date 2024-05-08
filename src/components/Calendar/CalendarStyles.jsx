import styled from "styled-components";

export const WrapperCalendar = styled.div`
  margin: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    transition-duration: 1s;
    ${({mobileState})=> mobileState ? "z-index: 1; opacity: 1;" : "z-index: 0; opacity: 0;"}
        ${({mobileState})=> console.log(mobileState)}
        ${({mobileState})=> console.log(mobileState)}
  }
`;
