import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import { MensualContainer } from "./MensualStyles";
import SectionsShifts from "../../components/SectionShifts/SectionsShifts";
import { useSelector } from "react-redux";
import CardUpdateShift from "../../components/Cards/CardUpdateShift/CardUpdateShift";

const Mensual = () => {
  const activatorUpdate = useSelector(state => state.updateShift.activator)
  return (
    <MensualContainer>
      <Calendar />
      <SectionsShifts />
      {activatorUpdate && <CardUpdateShift activatorUpdate={activatorUpdate} />}
    </MensualContainer>
  );
};

export default Mensual;
