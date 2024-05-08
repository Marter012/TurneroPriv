import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { MensualContainer } from "./MensualStyles";
import SectionsShifts from "../../components/SectionShifts/SectionsShifts";
import NavMenu from "../../components/NavShists/NavMenu";

const Mensual = () => {
  const [mobileState, setMobileState] = useState(false);
  console.log(mobileState)
  return (
    <MensualContainer>
      <Calendar mobileState={mobileState} />
      <SectionsShifts mobileState={mobileState} />
      <NavMenu setMobileState={setMobileState}/>
    </MensualContainer>
  );
};

export default Mensual;
