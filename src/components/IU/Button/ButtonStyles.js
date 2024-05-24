import { styled } from "styled-components";

export const ButtonStyles = styled.button`
  width: ${({ s_width }) => (s_width ? s_width : "")};
  height: ${({ s_height }) => (s_height ? s_height : "")};
  padding: ${({ s_padding }) => (s_padding ? s_padding : "0px")};
  border: none;
  border-radius: ${({ s_border_radius }) =>
    s_border_radius ? s_border_radius : "10px"};
  background-color: ${({ bg_color }) => (bg_color ? bg_color : "transparent")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: ${({ s_position }) => (s_position ? s_position : "")};
  top: ${({ s_top }) => (s_top ? s_top : "")};
  right: ${({ s_rigth }) => (s_rigth ? s_rigth : "")};

  &&:focus {
    outline: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
