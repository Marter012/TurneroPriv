import styled from "styled-components";

export const SemanalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const SemanalContainer = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: rgb(250, 250, 250, 0.3);
  display: flex;
  padding: 15px;
  border-radius: 30px;
  gap: 10px;

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 460px) {
    width: 90vw;
    border-radius: 0px;
    justify-content: start;
    overflow-x: scroll;
  }
`;
