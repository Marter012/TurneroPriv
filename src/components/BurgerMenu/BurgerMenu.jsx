import React from "react";
import {
  ArrowBurger,
  BurgerMenuContainer,
  ScissorsBurger,
} from "./BurgerMenuStyles";
import { FaScissors } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/BurgerMenu/BurgerMenuSlice";

const BurgerMenu = () => {
  const hiddenMenu = useSelector((state) => state.burgerMenu.hidden);
  const dispatch = useDispatch();
  return (
    <BurgerMenuContainer
      onClick={() => {
        dispatch(toggleHiddenMenu(!hiddenMenu))
      }}
      activeMenu={hiddenMenu}
    >
      <ArrowBurger activeMenu={hiddenMenu}>
        <FaArrowDown />
      </ArrowBurger>
      <ScissorsBurger activeMenu={hiddenMenu}>
        <FaScissors />
      </ScissorsBurger>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
