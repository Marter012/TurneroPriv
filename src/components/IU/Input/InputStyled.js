import { styled } from "styled-components";

export const InputContainerStyles = styled.div`
  display: flex;
`;

export const InputStyles = styled.input`
  width: 300px;
  height: 30px;
  background-color: rgb(0,0,0,0.7);
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-left: 5px solid black;
  color: white;
  text-align: center;  
  border-right: 5px solid black;
  font-size: 1rem;
`;
export const ErrorMessageStyles = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  display: flex;
  font-size: 14px;
  align-items: center;
`;
