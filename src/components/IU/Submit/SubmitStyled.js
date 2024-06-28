import styled from "styled-components";

export const ButtonSubmitStyles = styled.button`
  width: ${({ $s_width }) => ($s_width ? $s_width : "")};
  height: ${({ $s_height }) => ($s_height ? $s_height : "")};
  background-color: rgb(250, 250, 250, 0.6);
  font-weight: 600;
  font-size: 1.3rem;
  border-radius: 15px;
  cursor: pointer;
  padding: ${({ $s_padding }) => ($s_padding ? $s_padding : "")};
  overflow: hidden;
  position: relative;
  &:hover {
    background-color: rgb(250, 250, 250, 1);
  }
`;
