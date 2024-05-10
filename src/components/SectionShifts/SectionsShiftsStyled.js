import styled from "styled-components";

export const WrapperShifts = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    transition-duration: 1s;
    ${({ mobileState }) =>
      mobileState ? "z-index: 0; opacity: 0; ;" : "z-index: 1; opacity: 1;"}
  }
`;
