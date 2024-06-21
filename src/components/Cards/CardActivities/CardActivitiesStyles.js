import styled from "styled-components";

export const ContainerCardActivity = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ContainerFormActivity = styled.div`
  display: flex;
  position: relative;
  background-color: rgb(250, 250, 250, 0.5);
  width: 50vw;
  height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: +16;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px ){
    width: 80vw;
  }
`;

export const InputCardActivity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
`;
