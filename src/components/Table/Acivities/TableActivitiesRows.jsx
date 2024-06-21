import React, { useState } from "react";
import {
  ContainerTableActivitiesColumn,
  ContainerTableActivitiesRows,
} from "../TableActivitiesStyles";
import { ButtonStyles } from "../../IU/Button/ButtonStyles";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import {
  activatorUse,
  selectActivity,
  toggleCardUpdateActivities,
} from "../../../redux/Activities/ActivitiesSlice";
import { useDispatch } from "react-redux";
import { cancelActivities } from "../../../axios/axiosActivities";
import Loader from "../../Loader/Loader";

const TableActivitiesRows = ({ code, name, cost, finalPrice, netIncome }) => {
  const [activeLoader, setActiveLoader] = useState(false);
  const dispatch = useDispatch();
  const dispatchActivity = () => {
    const activity = { code, name, cost, finalPrice };
    dispatch(toggleCardUpdateActivities());
    dispatch(selectActivity(activity));
  };
  return (
    <ContainerTableActivitiesRows>
      <ButtonStyles
        $s_position="absolute"
        $bg_color="pink"
        $s_padding="5px"
        $s_left="10px"
        onClick={() => dispatchActivity()}
      >
        <GrDocumentUpdate />
      </ButtonStyles>

      <ContainerTableActivitiesColumn orderTable="one">
        <p>{code}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="two">
        <p>{name}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="three">
        <p>{cost}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="four">
        <p>{finalPrice}</p>
      </ContainerTableActivitiesColumn>
      <ContainerTableActivitiesColumn orderTable="five">
        <p>${netIncome}</p>
      </ContainerTableActivitiesColumn>
      <ButtonStyles
        $s_position="absolute"
        $bg_color="red"
        $s_fontSize="1rem"
        $s_height="30px"
        $s_width="30px"
        $s_padding="5px"
        $s_rigth="10px"
        onClick={() => {
          cancelActivities(code);
          setActiveLoader(true);
          setTimeout(() => {
            dispatch(activatorUse());
          }, 1500);
        }}
      >
        {activeLoader ? <Loader /> : <FaDeleteLeft />}
      </ButtonStyles>
    </ContainerTableActivitiesRows>
  );
};

export default TableActivitiesRows;
