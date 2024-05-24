import React from "react";
import { ButtonStyles } from "./ButtonStyles";

const Button = ({
  children,
  bg_color,
  type = "submit",
  s_position,
  s_border_radius,
  s_padding,
  s_height,
  s_width,
  s_top,
  s_rigth
}) => {
  return (
    <ButtonStyles
      type={type}
      bg_color={bg_color}
      s_position={s_position}
      s_border_radius={s_border_radius}
      s_padding={s_padding}
      s_height={s_height}
      s_width={s_width}
      s_top={s_top}
      s_rigth={s_rigth}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
