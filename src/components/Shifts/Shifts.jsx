import React, { useState } from "react";
import { ShiftsCard, ShiftsCardColumn } from "./ShiftsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";
import { updateStateShifts } from "../../axios/axiosShifts";

import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import {
  selectedShift,
  toggleNavShifts,
  toggleShifts,
} from "../../redux/SelectedShifts/SelectedShifts";

import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import {
  selectedShiftUpdate,
  toggleShiftsUpdate,
} from "../../redux/UpdateShift/UpdateShiftSlice";
import { activeGet } from "../../redux/Shifts/ShiftsSlice";

const Shifts = ({
  date,
  schedule,
  name,
  price,
  location,
  phone,
  activity,
  code,
}) => {
  let activities = activity.split(",");
  const dispatch = useDispatch();
  const [activeLoader, setActiveLoader] = useState(false);

  const cancelShift = () => {
    updateStateShifts(code);
    setActiveLoader(true);
    console.log("activado");
    setTimeout(() => {
      dispatch(activeGet());
      dispatch(toggleNavShifts(false));
    }, 1000);
  };

  const updateShift = () => {
    dispatch(toggleShiftsUpdate(true));
    dispatch(
      selectedShiftUpdate({
        date,
        schedule,
        name,
        price,
        location,
        phone,
        activity,
        code,
      })
    );
  };

  const showCard = (item) => {
    dispatch(selectedShift(item));
    dispatch(toggleShifts(true));
  };

  return (
    <ShiftsCard>
      <ShiftsCardColumn className="two">
        <h2>
          {name
            .split(" ")[0]
            .toUpperCase()
            .replace(/\b\w/g, function (l) {
              return l.toUpperCase();
            })}
        </h2>
      </ShiftsCardColumn>
      <ShiftsCardColumn className="one">
        <p>{schedule} hs</p>
      </ShiftsCardColumn>
      <ShiftsCardColumn className="tree">
        <p>${price}</p>
      </ShiftsCardColumn>
      <ShiftsCardColumn className="four">
        <p>
          {location.toLowerCase().replace(/\b\w/g, function (l) {
            return l.toUpperCase();
          })}
        </p>
      </ShiftsCardColumn>

      <ShiftsCardColumn className="five">
        {activities.map((item) => {
          return (
            <span key={item.name}>
              {item.toLowerCase().replace(/\b\w/g, function (l) {
                return l.toUpperCase();
              })}
            </span>
          );
        })}
      </ShiftsCardColumn>
      <ShiftsCardColumn className="six">
        <ButtonStyles $s_padding={"5px 15px 5px 15px"} $bg_color="green">
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
        $bg_color="red"
        $s_position="absolute"
        $s_height="30px"
        $s_width="30px"
        $s_border_radius="50%"
        $s_top="5%"
        $s_rigth="-30px"
        onClick={() => cancelShift()}
      >
        {activeLoader ? <Loader /> : <MdDeleteForever />}
      </ButtonStyles>

      <ButtonStyles
        $bg_color="#99ee99"
        $s_position="absolute"
        $s_height="30px"
        $s_width="30px"
        $s_border_radius="50%"
        $s_top="37%"
        $s_rigth="-30px"
        onClick={() => updateShift()}
      >
        <GrDocumentUpdate />
      </ButtonStyles>

      <ButtonStyles
        $bg_color="pink"
        $s_position="absolute"
        $s_height="30px"
        $s_width="30px"
        $s_border_radius="50%"
        $s_top="70%"
        $s_rigth="-30px"
        onClick={() =>
          showCard({
            date,
            schedule,
            name,
            price,
            location,
            phone,
            activity,
            code,
          })
        }
      >
        <FaEye />
      </ButtonStyles>
    </ShiftsCard>
  );
};

export default Shifts;
