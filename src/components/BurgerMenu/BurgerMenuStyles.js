import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  position: absolute;
  font-size: 2rem;
  color: white;
  right: 15px;
  top: 15px;
  z-index: +12;
  overflow: hidden;
  animation: ${({ activeMenu }) =>
    activeMenu ? "activeRotate 1s" : "inhactiveRotate"};
  transition-duration: 1s;
  rotate: ${({ activeMenu }) => (activeMenu ? "270deg" : "0deg")};

  @keyframes activeRotate {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 270deg;
    }
  }
  @keyframes inhactiveRotate {
    0% {
      rotate: 270deg;
    }
    100% {
      rotate: calc(270 * 2);
    }
  }
`;

export const ArrowBurger = styled.div`
  position: absolute;
  z-index: ${({ activeMenu }) => (activeMenu ? "1" : "0")};
  opacity: ${({ activeMenu }) => (activeMenu ? "1" : "0")};
  rotate: 270deg;
  transition-duration: 1s;
`;

export const ScissorsBurger = styled.div`
  order: 1;
  z-index: ${({ activeMenu }) => (activeMenu ? "0" : "1")};
  opacity: ${({ activeMenu }) => (activeMenu ? "0" : "1")};
  transition-duration: 1s;

`;
