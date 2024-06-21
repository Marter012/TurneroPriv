import React from "react";
import {
  ContainerTableActivitiesColumn,
  ContainerTableActivitiesColumns,
} from "../TableActivitiesStyles";
import { ButtonStyles } from "../../IU/Button/ButtonStyles";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleCardActivities } from "../../../redux/Activities/ActivitiesSlice";

const TableActivitiesColumns = () => {
  const dispatch = useDispatch();
  return (
    <ContainerTableActivitiesColumns>
      <ButtonStyles
        onClick={() => dispatch(toggleCardActivities())}
        $s_position="absolute"
        $s_left="10px"
        $s_fontSize="2rem"
      >
        <IoMdAddCircle />
      </ButtonStyles>
      <ContainerTableActivitiesColumn $orderTable="one">
        <p>Codigo</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn $orderTable="two">
        <p>Actividad</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn $orderTable="three">
        <p>Costo</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn $orderTable="four">
        <p>Precio Final</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn $orderTable="five">
        <p>Ganancia Neta</p>
      </ContainerTableActivitiesColumn>
    </ContainerTableActivitiesColumns>
  );
};

export default TableActivitiesColumns;
