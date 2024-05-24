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
              dispatch(toggleShifts());
              dispatch(toggleShiftsUpdate());
            }, 1000);
          }}
        >
          <Form>
            <Input name="date" type="date" placeholder="Fecha" />
            <Input name="schedule" type="time" placeholder="Horario" />
            <Input name="name" type="text" placeholder="Nombre y Apellido" />
            <Input name="price" type="number" placeholder="Precio" />
            <Input name="location" type="text" placeholder="Lugar" />
            <Input name="phone" type="number" placeholder="Celular" />
            <Input name="activity" type="text" placeholder="Actividades" />
            <Submit s_width={"200px"} s_height={"50px"} type="button">
              Actualizar Turno
            </Submit>
          </Form>
        </Formik>
      </ContainerCardUpdateShift>
      <ModalOverlayStyled
        s_zIndex={12}
        onClick={() => dispatch(toggleShiftsUpdate())}
        hiddenMenu={!activatorUpdate}
      />
    </>
  );
};

export default CardUpdateShift;
