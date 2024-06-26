import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ContainerActionShifts = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $selectedNav }) => ($selectedNav ? "flex" : "none")};
    margin-top: 5vh;
    height: 95vh;
  }
`;

export const Form = styled(FormikForm)`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
