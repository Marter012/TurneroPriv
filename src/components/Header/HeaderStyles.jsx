import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: black;
  z-index: +11;
  color: white;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  align-items: center;
  ${({ hiddenMenu }) => (hiddenMenu ? "top: 0px;" : "top: -300px;")}
  transition-duration: 0.5s;

  p:hover {
    background-color: rgb(250, 250, 250, 0.7);
    transition-duration: 0.2s;
  }
`;

export const HeaderItem = styled.p`
  width: 25%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
  font-size: 1.5rem;
  cursor: pointer;

  ${({ activePage }) =>
    activePage
      ? "background-color: rgb(250,250,250,0.8);"
      : "background-color: rgb(250,250,250,0.3);"}

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 460px) {
    width: 30%;

    a {
      font-size: 1.1rem;
    }
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: +11;
  width: 100vw;
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
