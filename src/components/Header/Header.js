import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  ModalOverlayStyled,
} from "./HeaderStyles";
import { FaCalendarAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { MdRequestPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/BurgerMenu/BurgerMenuSlice";

const Header = () => {
  const hiddenMenu = useSelector((state) => state.burgerMenu.hidden);
  const dispatch = useDispatch();
  return (
    <>
      {hiddenMenu && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenMenu(!hiddenMenu))}
          hiddenMenu={!hiddenMenu}
          s_zIndex={99}
        />
      )}
      <HeaderContainer hiddenMenu={hiddenMenu}>
        <HeaderItem>
          <Link to={"/"}>
            <FaCalendarAlt />
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link to={"/semanal"}>
            <FaList />
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link to={"/cobros"}>
            <MdRequestPage />
          </Link>
        </HeaderItem>
      </HeaderContainer>
    </>
  );
};

export default Header;
