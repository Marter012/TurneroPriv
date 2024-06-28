import styled from "styled-components";

export const ContainerSearcher = styled.div`
  width: 300px;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    font-size: 1.3rem;
    background-color: rgb(250, 250, 250, 0.7);
    border: none;
    border-radius: 10px;
    width: 90%;
    height: 70%;
    text-align: center;
    cursor: pointer;
  }
`;

export const ContainerCustomers = styled.div`
  position: absolute;
  top: 90%;
  width: 100%;
  height: ${({ $animationOn }) => ($animationOn ? "110px" : "0px")};
  background-color: rgb(0, 0, 0, 0.8);
  overflow-y: scroll;
  overflow-x: hidden;
  color: white;
  text-align: center;
  scrollbar-width: none;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  p {
    margin: 0;
  }
  transition-duration: 0.5s;
  button {
    background-color: transparent;
    border: none;
    width: auto;
    cursor: pointer;
    color: white;
  }
  button:hover {
    background-color: cadetblue;
    transition-duration: 0.5s;
    width: 100%;
    animation: 1s showModal ease-in;
  }
`;
