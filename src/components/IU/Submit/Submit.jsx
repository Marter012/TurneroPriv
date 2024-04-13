import React from "react";
import { ButtonSubmitStyles } from "./SubmitStyled";

const Submit = ({ children, onClick, disabled = false, bg_color }) => {
  return (
    <ButtonSubmitStyles
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      {children}
    </ButtonSubmitStyles>
  );
};

export default Submit;
