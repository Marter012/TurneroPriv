import { styled } from "styled-components";

export const InputContainerStyles = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputStyles = styled.input`
  width: 350px;
  height: 40px;
  background-color: rgb(250, 250, 250, 0.6);
  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border: none;
  border-left: 5px solid beige;
  text-align: center;
  border-right: 5px solid beige;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 460px) {
    width: 200px;
  }

`;
export const ErrorMessageStyles = styled.p`
  margin: 0;
  width: 30%;
  margin-top: 5px;
  color: #fb103d;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  font-weight: 800;

  @media (max-width: 460px) {
    width: 100%;
  }
`;
