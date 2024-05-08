import React, { useEffect, useState } from "react";
import { ListShiftsContainer, ListShiftsWrapper } from "./ListShiftsStyles";
import { useSelector } from "react-redux";
import { useActiveGetShifts } from "../useHook/useActiveGetShifts";
import Shifts from "../Shifts/Shifts";
import dayjs from "dayjs";

const ListShifts = () => {
  const selectDay = useSelector((state) => state.selectDay.day);
  const shifts = useSelector((state) => state.shifts?.listShiftsDay);
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const [lett, setlett] = useState([...shifts])

  useEffect(() => {
    setlett([...shifts])
  }, [shifts])
  
  useActiveGetShifts(selectDay,setlett);

  lett.sort(function (a, b) {
    return (
      a.schedule.split(":").map((item) => parseInt(item))[0] +
      a.schedule.split(":").map((item) => parseInt(item))[1] / 60 -
      (b.schedule.split(":").map((item) => parseInt(item))[0] +
        b.schedule.split(":").map((item) => parseInt(item))[1] / 60)
    );
  });
  return (
    <ListShiftsWrapper selected={selectedNav === 1}>
      <ListShiftsContainer>
        {lett &&
          lett
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
