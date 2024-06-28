import React from "react";
import { ContainerCardUpdateShift } from "./CardUpdateShiftStyles";
import { Formik } from "formik";
import { Form } from "../../ActionsShifts/ActionsShiftsStyles";
import Input from "../../IU/Input/Input";
import Submit from "../../IU/Submit/Submit";
import { ShiftsValidationSchema } from "../../Formik/ValidationSchema";
import { updateShifts } from "../../../axios/axiosShifts";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlayStyled } from "../../Header/HeaderStyles";
import {
  selectedShiftUpdate,
  toggleShiftsUpdate,
} from "../../../redux/UpdateShift/UpdateShiftSlice";
import { SelectDay } from "../../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";
import { toggleShifts } from "../../../redux/SelectedShifts/SelectedShifts";
import { ButtonStyles } from "../../IU/Button/ButtonStyles";
import Loader from "../../Loader/Loader";

const CardUpdateShift = (activatorUpdate) => {
  const shiftSelected = useSelector((state) => state.updateShift.shiftSelected);

  const { date, schedule, name, price, location, phone, activity, code } =
    shiftSelected;

  const dispatch = useDispatch();

  return (
    <>
      <ContainerCardUpdateShift>
        <h3>Actualizar Datos</h3>
        <Formik
          initialValues={{
            date: date || "",
            schedule: schedule || "",
            name: name || "",
            price: price || "",
            location: location || "",
            phone: phone || "",
            activity: activity || "",
          }}
          validationSchema={ShiftsValidationSchema}
          onSubmit={(values, { resetForm }) => {
            const { date, schedule, name, price, location, phone, activity } =
              values;

            updateShifts(
              code,
              date,
              schedule,
              name,
              price,
              location,
              phone,
              activity
            );

            setTimeout(() => {
              dispatch(selectedShiftUpdate(""));
              dispatch(SelectDay(dayjs(date)));
              resetForm();
              dispatch(toggleShifts(false));
              dispatch(toggleShiftsUpdate(false));
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input name="date" type="date" placeholder="Fecha" />
              <Input name="schedule" type="time" placeholder="Horario" />
              <Input name="name" type="text" placeholder="Nombre y Apellido" />
              <Input name="price" type="number" placeholder="Precio" />
              <Input name="location" type="text" placeholder="Lugar" />
              <Input name="phone" type="number" placeholder="Celular" />
              <Input name="activity" type="text" placeholder="Actividades" />
              <Submit $s_width={"200px"} $s_height={"50px"} type="button">
                {isSubmitting ? <Loader /> : "Actualizar Turno"}
              </Submit>
            </Form>
          )}
        </Formik>
        <ButtonStyles
          $bg_color="red"
          $s_position="absolute"
          $s_height="30px"
          $s_width="30px"
          $s_border_radius="50%"
          $s_top="10px"
          $s_left="10px"
          onClick={() => dispatch(toggleShiftsUpdate())}
        >
          X
        </ButtonStyles>
      </ContainerCardUpdateShift>
      <ModalOverlayStyled
        $s_zIndex={12}
        onClick={() => dispatch(toggleShiftsUpdate())}
        $hiddenMenu={!activatorUpdate}
      />
    </>
  );
};

export default CardUpdateShift;
