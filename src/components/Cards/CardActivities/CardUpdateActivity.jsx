import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlayStyled } from "../../Header/HeaderStyles";
import {
  ContainerCardActivity,
  ContainerFormActivity,
  InputCardActivity,
} from "./CardActivitiesStyles";
import { Formik } from "formik";
import { ActivitiesValidationSchema } from "../../Formik/ValidationSchema";
import Submit from "../../IU/Submit/Submit";
import {
  activatorUse,
  toggleCardUpdateActivities,
} from "../../../redux/Activities/ActivitiesSlice";
import { Form } from "../../ActionsShifts/ActionsShiftsStyles";
import Input from "../../IU/Input/Input";
import { updateActivity } from "../../../axios/axiosActivities";
import Loader from "../../Loader/Loader";

const CardUpdateActivity = ({ toggleUpdateActivity }) => {
  const activity = useSelector((state) => state.activities.activitySelected);
  const { code, name, cost, finalPrice } = activity;
  const dispatch = useDispatch();
  return (
    <>
      {toggleUpdateActivity && (
        <ModalOverlayStyled
          $s_zIndex={10}
          onClick={() => dispatch(toggleCardUpdateActivities())}
          $hiddenMenu={!toggleUpdateActivity}
        />
      )}
      <ContainerCardActivity>
        <ContainerFormActivity>
          <h4>Actualizar Actividad</h4>
          <Formik
            initialValues={{
              name: name || "",
              cost: cost || 0,
              finalPrice: finalPrice || "",
            }}
            validationSchema={ActivitiesValidationSchema}
            onSubmit={async (values, { resetForm }) => {
              const { name, cost, finalPrice } = values;
              const netIncome = finalPrice - cost;
              console.log(code);
              if (code === undefined) {
                return;
              }

              // eslint-disable-next-line
              const activity = await updateActivity(
                code,
                name,
                cost,
                finalPrice,
                netIncome
              );
              dispatch(activatorUse());
              setTimeout(() => {
                dispatch(toggleCardUpdateActivities());
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
                <Submit $s_width={"200px"} $s_height={"50px"} type="button">
                  {isSubmitting ? <Loader /> : "Actualizar"}
                </Submit>
              </Form>
            )}
          </Formik>
        </ContainerFormActivity>
      </ContainerCardActivity>
    </>
  );
};
export default CardUpdateActivity;
