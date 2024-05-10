import styled from "styled-components";

export const MensualContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    transition-duration: 1s;
  }
`;
