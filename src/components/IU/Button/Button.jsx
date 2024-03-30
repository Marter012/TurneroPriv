import React from 'react'
import { ButtonStyles } from './ButtonStyles'

const Button = ({children,bg_color}) => {
  return (
    <ButtonStyles bg_color={bg_color}>
      {children}
    </ButtonStyles>
  )
}

export default Button
