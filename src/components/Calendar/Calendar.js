import React, { useEffect, useState } from "react";
import Calendar from "https://cdn.skypack.dev/react-calendar@4.0.0";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarMenu,
  CalendarMenuItems,
  ContainerMontserrat,
  WrapperCalendar,
} from "./CalendarStyles";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";
import { ModalOverlayStyled } from "../Header/HeaderStyles";
import { toggleHiddenCalendar } from "../../redux/CalendarMenu/CalendarMenuSlice";
import { FaCalendarAlt } from "react-icons/fa";

const MontserratCalendar = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SelectDay(dayjs(date)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <Calendar
      formatShortWeekday={(locale, dateValue) =>
        ["D", "L", "M", "M", "J", "V", "S"][dateValue.getDay()]
      }
      value={date}
      onChange={setDate}
      locale="es"
      calendarType="US"
    />
  );
};

const Calendar1 = ({ mobileState }) => {
  const hiddenCalendar = useSelector((state) => state.calendarMenu.hidden);
  const dispatch = useDispatch();
  const title = "CALENDARIO";
  return (
    <WrapperCalendar mobileState={mobileState}>
      {hiddenCalendar && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCalendar(!hiddenCalendar))}
          $hiddenMenu={!hiddenCalendar}
          $s_zIndex={"6"}
        />
      )}

      <ContainerMontserrat $hiddenCalendar={!hiddenCalendar}>
        <MontserratCalendar $hiddenCalendar={hiddenCalendar} />
      </ContainerMontserrat>

      <CalendarMenu
        onClick={() => {
          dispatch(toggleHiddenCalendar(hiddenCalendar));
        }}
      >
        <CalendarMenuItems>
          {title.split("").map((item) => {
            return (
              <p key={`${item}${Math.floor(Math.random() * 100)}`}>{item}</p>
            );
          })}
        </CalendarMenuItems>
        <FaCalendarAlt />
      </CalendarMenu>
    </WrapperCalendar>
  );
};

export default Calendar1;
