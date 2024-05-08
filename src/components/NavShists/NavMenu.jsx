import React from "react";
import { ContainerNavMenu } from "./NavShistsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";

const NavMenu = ({setMobileState}) => {
  return (
    <ContainerNavMenu>
      <ButtonStyles onClick={() => {setMobileState(true)}}>CALENDARIO</ButtonStyles>
      <ButtonStyles onClick={() => {setMobileState(false)}}>AGENDA</ButtonStyles>
    </ContainerNavMenu>
  );
};

export default NavMenu;
