import styled from "styled-components";

export const ContainerNavShifts = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  button {
    font-size: 1.5rem;
    width: 100%;
    background-color: rgb(250, 250, 250, 0.5);
    border-radius: 0 !important;
    border: 1px solid white;
    transition-duration: 0.5s;
  }
  button:hover {
    background-color: rgb(250, 250, 250);
    color: black;
    transition-duration: 0.5s;
  }
`;

export const ContainerNavMenu = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  z-index:2;
  button {
    font-size: 1.5rem;
    width: 100%;
    background-color: rgb(250, 250, 250, 0.5);
    border-radius: 0 !important;
    border: 1px solid white;
    transition-duration: 0.5s;
  }
  button:hover {
    background-color: rgb(250, 250, 250);
    color: black;
    transition-duration: 0.5s;
  }
`;
