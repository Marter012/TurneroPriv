import { styled } from "styled-components";

export const ContainerCardUpdateShift = styled.div`
  height: 90vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  transition-duration: 1s;
  background-color: rgb(250, 250, 250, 0.5);
  border-radius: 10px;
  z-index: +13;
  h3 {
    font-size: 3rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
