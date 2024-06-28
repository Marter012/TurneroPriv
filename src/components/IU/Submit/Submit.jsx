import React from "react";
import { ButtonSubmitStyles } from "./SubmitStyled";

const Submit = ({ children, onClick, disabled = false, $s_width, $s_height }) => {
  return (
    <ButtonSubmitStyles
      disabled={disabled}
      onClick={onClick}
      type="submit"
      $s_width={$s_width}
      $s_height={$s_height}
    >
      {children}
    </ButtonSubmitStyles>
  );
};

export default Submit;
