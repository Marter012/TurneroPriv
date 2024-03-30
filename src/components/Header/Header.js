import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  ModalOverlayStyled,
} from "./HeaderStyles";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenMenu } from "../../redux/BurgerMenu/BurgerMenuSlice";
import { categoriesHeader } from "../../utils/categoriesHeader";
import { selectItem } from "../../redux/HeaderItems/HeaderItemsSlice";
import { Link } from "react-router-dom";


const Header = () => {
  const hiddenMenu = useSelector((state) => state.burgerMenu.hidden);
  const dispatch = useDispatch();

  const selecItem = useSelector((state) => state.selectedItem.selectedItem);

  return (
    <>
      {hiddenMenu && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenMenu(hiddenMenu))}
          isHidden={!hiddenMenu}
        />
      )}
      <HeaderContainer hiddenMenu={hiddenMenu}>
        {categoriesHeader.map(({ name, route }) => {
          return (
            <HeaderItem
              onClick={() => dispatch(selectItem(name))}
              activePage={name === selecItem}
            >
              <Link to={route}>{name}</Link>
            </HeaderItem>
          );
        })}
      </HeaderContainer>
    </>
  );
};

export default Header;
