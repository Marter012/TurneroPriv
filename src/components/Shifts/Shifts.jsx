import React, { useState } from "react";
import { ShiftsCard, ShiftsCardColumn } from "./ShiftsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { updateStateShifts } from "../../axios/axiosShifts";

import { useDispatch } from "react-redux";
import { toggleNavShifts } from "../../redux/NavShifts/NavShiftsSlicer";
import Loader from "../Loader/Loader";
import { activeGet } from "../../redux/GetShifts/GetShiftsSlice";
const Shifts = ({ schedule, name, price, location, phone, activity, code }) => {
  let activities = activity.split(",");
  const dispatch = useDispatch();
  const [activeLoader, setActiveLoader] = useState(false);

  const cancelShift = () => {
    updateStateShifts(code);
    setTimeout(() => {
      setActiveLoader(true);
      dispatch(toggleNavShifts());
      dispatch(activeGet());
    }, 500);
    console.log("hola");
  };

  return (
    <ShiftsCard>
      <ShiftsCardColumn column="one">
        <p>{schedule}</p>
      </ShiftsCardColumn>
      <ShiftsCardColumn column="two">
        <h2>
          {name.toLowerCase().replace(/\b\w/g, function (l) {
            return l.toUpperCase();
          })}
        </h2>
      </ShiftsCardColumn>
      <ShiftsCardColumn column="tree">
        <p>${price}</p>
      </ShiftsCardColumn>
      <ShiftsCardColumn column="four">
        <p>{location.toUpperCase()}</p>
      </ShiftsCardColumn>

      <ShiftsCardColumn column="five">
        {activities.map((item) => {
          return <span>{item}</span>;
        })}
      </ShiftsCardColumn>
      <ShiftsCardColumn column="six">
        <ButtonStyles s_padding={"5px 15px 5px 15px"} bg_color="green">
          <a
            href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hola ${name
              .toLowerCase()
              .replace(/\b\w/g, function (l) {
                return l.toUpperCase();
              })}, confirmamos tu turno en ${location.toUpperCase()} a las ${schedule}?`}
          >
            {phone}
          </a>
        </ButtonStyles>
      </ShiftsCardColumn>

      <ButtonStyles
        bg_color="red"
        s_position="absolute"
        s_height="30px"
        s_width="30px"
        s_border_radius="50%"
        onClick={cancelShift}
      >
        {activeLoader ? <Loader /> : "x"}
      </ButtonStyles>
    </ShiftsCard>
  );
};

export default Shifts;
