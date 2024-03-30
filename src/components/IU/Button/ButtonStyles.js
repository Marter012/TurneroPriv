import { styled } from "styled-components";

export const ButtonStyles = styled.button`
    padding: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    border-radius: 10px;
    background-color: ${({bg_color}) => bg_color ? bg_color : "transparent"};
    
    cursor: pointer;
    a{
        color: black;
        text-decoration: none;
    }
`;
