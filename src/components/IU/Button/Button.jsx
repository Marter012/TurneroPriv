import React from 'react'
import { ButtonStyles } from './ButtonStyles'

const Button = ({children,bg_color, type = "submit"}) => {
  return (
    <ButtonStyles type={type} bg_color={bg_color}>
      {children}
    </ButtonStyles>
  )
}

export default Button
