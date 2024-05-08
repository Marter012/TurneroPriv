import styled from "styled-components";

export const WrapperShifts = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;    
    transition-duration: 1s;  
    ${({mobileState})=> mobileState ? "z-index: 0; opacity: 0; ;" : "z-index: 1; opacity: 1;"}
  }
`;
