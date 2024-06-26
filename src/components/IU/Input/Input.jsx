import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  ErrorMessageStyles,
  InputContainerStyles,
  InputStyles,
} from "./InputStyled";

const Input = ({ id, name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyles>
          <InputStyles
            autoComplete="off"
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            $isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyles>{message}</ErrorMessageStyles>}
          </ErrorMessage>
        </InputContainerStyles>
      )}
    </Field>
  );
};

export default Input;
