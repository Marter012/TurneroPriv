import styled from "styled-components";

export const SemanalWrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const SemanalContainer = styled.div`
  width: 80vw;
  min-height: 80%;
  background-color: rgb(250, 250, 250, 0.3);
  display: flex;
  padding: 15px;
  border-radius: 30px;
  gap: 10px;
  overflow: hidden;
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
