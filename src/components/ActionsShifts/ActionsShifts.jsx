import React from "react";
import {
  ContainerActionShifts,
  Form,
} from "./ActionsShiftsStyles";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import Input from "../IU/Input/Input";
import Submit from "../IU/Submit/Submit";
import { addShiftsInitialValues } from "../Formik/InitialValues";
import { ShiftsValidationSchema } from "../Formik/ValidationSchema";

const ActionsShifts = () => {
  const selectedNav = useSelector((state) => state.selectedShifts.selected);

  return (
    <ContainerActionShifts selected={selectedNav === 2}>
      <Formik
        initialValues={addShiftsInitialValues}
        validationSchema={ShiftsValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
      >
        <Form>
          <Input name="date" type="date" placeholder="Fecha" />
          <Input name="schedule" type="time" placeholder="Horario" />
          <Input name="name" type="text" placeholder="Nombre y Apellido" />
          <Input name="price" type="number" placeholder="Precio" />
          <Input name="location" type="text" placeholder="Lugar" />
          <Input name="phone" type="number" placeholder="Celular" />
          <Input name="activity" type="text" />
          <Submit type="button">Cargar Turno</Submit>
        </Form>
      </Formik>
    </ContainerActionShifts>
  );
};

export default ActionsShifts;
