import React from "react";
import {
  ContainerTableActivitiesColumn,
  ContainerTableActivitiesRows,
} from "../TableActivitiesStyles";
import { ButtonStyles } from "../../IU/Button/ButtonStyles";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";

const TableActivitiesRows = ({ name, price, schedule, date }) => {
  return (
    <ContainerTableActivitiesRows>
      <ButtonStyles
        s_position="absolute"
        bg_color="pink"
        s_padding="5px"
        s_left="10px"
      >
        <GrDocumentUpdate />
      </ButtonStyles>

      <ContainerTableActivitiesColumn orderTable="one">
        <p>123232</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="two">
        <p>{date}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="three">
        <p>{schedule}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="four">
        <p>{name}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="five">
        <p>${price}</p>
      </ContainerTableActivitiesColumn>
      <ButtonStyles
        s_position="absolute"
        bg_color="red"
        s_padding="5px"
        s_rigth="10px"
      >
        <FaDeleteLeft />
      </ButtonStyles>
    </ContainerTableActivitiesRows>
  );
};

export default TableActivitiesRows;
