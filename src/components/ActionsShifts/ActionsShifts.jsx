import React from "react";
import { ContainerActionShifts, Form } from "./ActionsShiftsStyles";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Input from "../IU/Input/Input";
import Submit from "../IU/Submit/Submit";
import { addShiftsInitialValues } from "../Formik/InitialValues";
import { ShiftsValidationSchema } from "../Formik/ValidationSchema";
import { createShift } from "../../axios/axiosShifts";
import Loader from "../Loader/Loader";
import { activeGet } from "../../redux/GetShifts/GetShiftsSlice";
import { SelectDay } from "../../redux/SelectedDay/SelectedDaySlice";
import dayjs from "dayjs";

const ActionsShifts = () => {
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const dispatch = useDispatch();
  return (
    <ContainerActionShifts selectedNav={selectedNav === 2}>
      <Formik
        initialValues={addShiftsInitialValues}
        validationSchema={ShiftsValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const { date, schedule, name, price, location, phone, activity } =
            values;

          let category = "shifts";
          const shift = await createShift(
            category,
            date,
            schedule,
            name,
            price,
            location,
            phone,
            activity
          );
          dispatch(SelectDay(dayjs(date)));
          dispatch(activeGet());
          resetForm();
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
            <Input name="activity" type="text" />
            <Submit s_width={"200px"} s_height={"50px"} type="button">
              {isSubmitting ? <Loader /> : "Cargar Turno"}
            </Submit>
          </Form>
        )}
      </Formik>
    </ContainerActionShifts>
  );
};

export default ActionsShifts;
