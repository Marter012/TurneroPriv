import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  width: 3em;
  height: 3rem;
  position: absolute;
  color: white;
  cursor: pointer;
  right: 0;
  top: 5px;
  overflow: hidden;
  z-index: +100;
  transition-duration: 1s;
  div {
    rotate: ${({ $activeMenu }) => ($activeMenu ? "270deg" : "0deg")};
  }
  svg,
  path {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    top: auto !important;
    bottom: 0;
    right: 0;
  }
`;

export const ArrowBurger = styled.div`
  position: absolute;
  z-index: ${({ $activeMenu }) => ($activeMenu ? "1" : "0")};
  opacity: ${({ $activeMenu }) => ($activeMenu ? "1" : "0")};
  rotate: 270deg;
  transition-duration: 1s;
`;

export const ScissorsBurger = styled.div`
  order: 1;
  z-index: ${({ $activeMenu }) => ($activeMenu ? "0" : "1")};
  opacity: ${({ $activeMenu }) => ($activeMenu ? "0" : "1")};
  transition-duration: 1s;
`;
