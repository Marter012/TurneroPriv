import * as Yup from "yup";

export const ShiftsValidationSchema = Yup.object({
  date: Yup.date().required("Fecha Requerido"),
  schedule: Yup.date().typeError('Solo ingrese numeros').required("Horario Requerido"),
  name: Yup.string().required("Nombre requerido"),
  price: Yup.number().typeError('Solo ingrese numeros').required("Precio requerido"),
  location: Yup.string().required("Lugar requerido"),
  phone: Yup.number().required("Celular requerido"),
  activity: Yup.string().required("Actividad requerida"),
});
