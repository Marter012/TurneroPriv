import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: black;
  z-index: +100;
  color: white;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  align-items: center;
  top: ${({ $hiddenMenu }) => ($hiddenMenu ? "0px;" : "-300px;")};
  transition-duration: 0.5s;

  p:hover {
    background-color: rgb(250, 250, 250, 0.7);
    transition-duration: 0.2s;
  }
`;

export const HeaderItem = styled.p`
  width: 20%;
  height: 60%;
  border-radius: 10px;

  transition-duration: 1s;

  ${({ activePage }) =>
    activePage
      ? "background-color: rgb(250,250,250,0.8);"
      : "background-color: rgb(250,250,250,0.3);"}

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 460px) {
    width: 20%;

    a {
      font-size: 1.1rem;
    }
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ $s_zIndex }) => ($s_zIndex ? $s_zIndex: "+11;")};
  width: 100vw;
  height: 100vh;

  ${({ $hiddenMenu }) =>
    !$hiddenMenu &&
    css`
      backdrop-filter: blur(4px);
      background-color: rgb(0, 0, 0, 0.4);
    `}
`;
