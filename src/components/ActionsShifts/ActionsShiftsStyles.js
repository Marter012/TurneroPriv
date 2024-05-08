import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ContainerActionShifts = styled.div`
  display: ${({ selected }) => (selected ? "flex" : "none")};
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormikForm)`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ActionAddShifts = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 100%;
  background-color: red;
  position: relative;
  span {
    color: white;
    width: 2rem;
    height: 2rem;
    right: -40px;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const ActionsShiftsActivities = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
