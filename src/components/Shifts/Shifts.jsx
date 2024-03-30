import React from "react";
import { ShiftsCard, ShiftsCardBottom, ShiftsCardTop } from "./ShiftsStyles";
import { ButtonStyles } from "../IU/Button/ButtonStyles";

const Shifts = () => {
  return (
    <ShiftsCard>
      <ShiftsCardTop>
        <p>14:00hs</p>
        <h2>Franco capayan</h2>
        <p> $15000</p>
        <p>GYM</p>
      </ShiftsCardTop>

      <ShiftsCardBottom>
        <p>Tintura</p>
        <p>Alisado</p>
        <p>Color</p>
        <p>Color</p>
        <ButtonStyles bg_color="green">
          <a
            href={`https://api.whatsapp.com/send/?phone=3516729150&text=Buenas, queria confirmar tu turno en ${"GYM"} a las ${"14hs"}`}
          >
            3516478584
          </a>
        </ButtonStyles>
      </ShiftsCardBottom>
    </ShiftsCard>
  );
};

export default Shifts;
