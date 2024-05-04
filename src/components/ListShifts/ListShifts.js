import React from "react";
import { ListShiftsContainer, ListShiftsWrapper } from "./ListShiftsStyles";
import { useSelector } from "react-redux";
import { useActiveGetShifts } from "../useHook/useActiveGetShifts";
import Shifts from "../Shifts/Shifts";
import dayjs from "dayjs";
import moment from "moment";

const ListShifts = () => {
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const selectDay = useSelector((state) => state.selectDay.day);
  useActiveGetShifts();
  const shifts = useSelector((state) => state.shifts.Shifts);
  const ordenar = [...shifts];
  console.log(moment(`2024-05-04T03:31:00`).format("hh mm ss"))
  console.log(ordenar.map(item => {
    console.log(item.schedule,dayjs(selectDay).format("YYYY-MM-DD"))
    let no = moment(`${dayjs(selectDay).format("YYYY-MM-DD")}T${parseInt(item.schedule)}:00`).format("hh mm ss");
    console.log(no)
    return no
  }));

  //console.log(moment(no).isBefore(do1));

  // console.log(
  //   shifts[0].schedule
  //     .split(":")
  //     .map((item) => parseInt(item))
  //     .reduce((acc, aux) => acc + aux, 0)
  // );
  // console.log(
  //   shifts[1].schedule
  //     .split(":")
  //     .map((item) => parseInt(item))
  //     .reduce((acc, aux) => acc + aux, 0)
  // );
  // console.log(
  //   ordenar?.sort(
  //     (a, b) =>
  //       a.schedule
  //         .split(":")
  //         .map((item) => parseInt(item))
  //         .reduce((acc, aux) => acc + aux, 0) -
  //       b.schedule
  //         .split(":")
  //         .map((item) => parseInt(item))
  //         .reduce((acc, aux) => acc + aux, 0)
  //   )
  // );

  return (
    <ListShiftsWrapper selected={selectedNav === 1}>
      <ListShiftsContainer>
        {shifts
          ?.filter((item) => {
            return (
              item.date === dayjs(selectDay).format("YYYY-MM-DD") &&
              item.state === true
            );
          })
          .map((item) => {
            return <Shifts key={item.code} {...item} />;
          })}
      </ListShiftsContainer>
    </ListShiftsWrapper>
  );
};

export default ListShifts;
