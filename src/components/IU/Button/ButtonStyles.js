import { styled } from "styled-components";

export const ButtonStyles = styled.button`
  padding: ${({ s_padding }) => (s_padding ? s_padding : "0px")};
  border: none;
  border-radius: ${({ s_border_radius }) =>
    s_border_radius ? s_border_radius : "10px"};
  background-color: ${({ bg_color }) => (bg_color ? bg_color : "transparent")};
  cursor: pointer;

  position: ${({ s_position }) => (s_position ? s_position : "")};
 
  right: -2.5%;
  a {
    color: black;
    text-decoration: none;
  }
`;
