import React from "react";
import { ContainerActionShifts, Form } from "./ActionsShiftsStyles";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import Input from "../IU/Input/Input";
import Submit from "../IU/Submit/Submit";
import { addShiftsInitialValues } from "../Formik/InitialValues";
import { ShiftsValidationSchema } from "../Formik/ValidationSchema";
import { CiCirclePlus } from "react-icons/ci";
import { IconContext } from "react-icons/lib";

const ActionsShifts = () => {
  const selectedNav = useSelector((state) => state.selectedShifts.selected);

  return (
    <ContainerActionShifts selected={selectedNav === 2}>
      <Formik
        initialValues={addShiftsInitialValues}
        validationSchema={ShiftsValidationSchema}
        onSubmit={async ({ values }) => console.log(values)}
      >
        <Form>
          <Input name="date" type="date" placeholder="Fecha" />
          <Input name="schedule" type="text" placeholder="Horario" />
          <Input name="name" type="text" placeholder="Nombre y Apellido" />
          <Input name="price" type="text" placeholder="Precio" />
          <Input name="location" type="text" placeholder="Lugar" />
          <div>
            <Input name="activity" type="text" placeholder="Actividad" />
            <span>
              <CiCirclePlus />
            </span>
          </div>
          <Submit type="button">Cargar Turno</Submit>
        </Form>
      </Formik>
    </ContainerActionShifts>
  );
};

export default ActionsShifts;
