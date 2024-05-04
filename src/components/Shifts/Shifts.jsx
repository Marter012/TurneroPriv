import React from "react";
import { ShiftsCard, ShiftsCardBottom, ShiftsCardColumn } from "./ShiftsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { updateStateShifts } from "../../axios/axiosShifts";
import { useDispatch } from "react-redux";
import { toggleNavShifts } from "../../redux/NavShifts/NavShiftsSlicer";

const Shifts = ({ schedule, name, price, location, phone, activity, code }) => {
  let activities = activity.split(",");
  const dispatch = useDispatch();
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
      <ShiftsCardBottom>
        <ShiftsCardColumn column="five">
          {activities.map((item) => {
            return <p>{item}</p>;
          })}
        </ShiftsCardColumn>
        <ShiftsCardColumn column="six">
          <ButtonStyles bg_color="green">
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
      </ShiftsCardBottom>

      <ButtonStyles
        bg_color="red"
        s_position="absolute"
        s_padding="5px 10px 5px 10px "
        s_border_radius="50%"
        onClick={() => {
          updateStateShifts(code);
          dispatch(toggleNavShifts());
        }}
      >
        x
      </ButtonStyles>
    </ShiftsCard>
  );
};

export default Shifts;
