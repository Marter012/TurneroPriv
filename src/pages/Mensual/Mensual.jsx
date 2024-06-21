import React, { useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { MensualContainer } from "./MensualStyles";
import SectionsShifts from "../../components/SectionShifts/SectionsShifts";
import { useDispatch, useSelector } from "react-redux";
import CardUpdateShift from "../../components/Cards/CardUpdateShift/CardUpdateShift";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";

const Mensual = () => {
  const activatorUpdate = useSelector((state) => state.updateShift.activator);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SelectDay(dayjs(new Date())));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MensualContainer>
      <Calendar />
      <SectionsShifts />
      {activatorUpdate && <CardUpdateShift activatorUpdate={activatorUpdate} />}
    </MensualContainer>
  );
};

export default Mensual;
