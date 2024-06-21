import React from "react";
import {
  ContainerCardActivity,
  ContainerFormActivity,
  InputCardActivity,
} from "./CardActivitiesStyles";
import { Formik } from "formik";
import { Form } from "../../ActionsShifts/ActionsShiftsStyles";
import Input from "../../IU/Input/Input";
import Submit from "../../IU/Submit/Submit";
import { ModalOverlayStyled } from "../../Header/HeaderStyles";
import { ActivitiesValidationSchema } from "../../Formik/ValidationSchema";
import { createActivities } from "../../../axios/axiosActivities";
import { useDispatch } from "react-redux";
import {
  activatorUse,
  toggleCardActivities,
} from "../../../redux/Activities/ActivitiesSlice";
import Loader from "../../Loader/Loader";

const CardActivities = ({ toggleActivities }) => {
  const dispatch = useDispatch();
  return (
    <>
      {toggleActivities && (
        <ModalOverlayStyled
          s_zIndex={8}
          onClick={() => dispatch(toggleCardActivities())}
          $hiddenMenu={!toggleActivities}
        />
      )}
      <ContainerCardActivity toggleActivities={toggleActivities}>
        <ContainerFormActivity>
          <h4>Crear Nueva Actividad</h4>
          <Formik
            initialValues={{
              name: "",
              cost: 0,
              finalPrice: "",
            }}
            validationSchema={ActivitiesValidationSchema}
            onSubmit={async (values, { resetForm }) => {
              const { name, cost, finalPrice } = values;
              const netIncome = finalPrice - cost;
              console.log(name, cost, finalPrice, netIncome);

              await createActivities(name, cost, finalPrice, netIncome);
              dispatch(activatorUse());

              setTimeout(() => {
                dispatch(toggleCardActivities());
                resetForm();
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputCardActivity>
                  <p>Actividad</p>
                  <Input name="name" type="text" placeholder="Actividades" />
                </InputCardActivity>
                <InputCardActivity>
                  <p>Costo</p>
                  <Input name="cost" type="text" placeholder="Costo" />
                </InputCardActivity>
                <InputCardActivity>
                  <p>Precio</p>
                  <Input name="finalPrice" type="text" placeholder="Precio" />
                </InputCardActivity>
                <Submit s_width={"200px"} s_height={"50px"} type="button">
                  {isSubmitting ? <Loader /> : "Crear"}
                </Submit>
              </Form>
            )}
          </Formik>
        </ContainerFormActivity>
      </ContainerCardActivity>
    </>
  );
};

export default CardActivities;
