import { Field, reduxForm } from 'redux-form';
import React from 'react';
import axios from 'axios';

import FormField from '../../FormField';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Email inválido';
  }
  if (!values.nombre) {
    errors.nombre = 'Requerido';
  }
  if (!values.telefono) {
    errors.telefono = 'Requerido';
  }
  if (!values.direccion) {
    errors.direccion = 'Requerido';
  }

  return errors;
};

const SyncValidationForm = (props) => {
  const { handleSubmit, submitting, invalid, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="nombre"
        type="text"
        component={FormField}
        label="Nombre"
      />
      <Field
        name="email"
        type="email"
        component={FormField}
        label="Email"
      />
      <Field
        name="telefono"
        type="text"
        component={FormField}
        label="Teléfono"
      />
      <Field
        name="direccion"
        type="text"
        component={FormField}
        label="Dirección"
      />
      {
        props.hasError && (
          <p>Errores encontrados</p>
        )
      }
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={previousPage}
        >
          Volver
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={invalid || submitting}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

const onSubmit = (values, dispatch, { onSubmit }) => onSubmit;

const asyncValidate = (values) => {
  return axios.get(
    'http://localhost:8000/app_dev.php/validate',
    {
      params: { email: values.email },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
  .catch((response) => {
    throw { email: 'Hotmail no aceptado' };
  });
}

export default reduxForm({
  form: 'budgetForm',
  validate,
  onSubmit,
  asyncBlurFields: ['email'],
  asyncValidate,
  shouldAsyncValidate: ({syncValidationPasses, trigger}) => {
    if (!syncValidationPasses) return false;
    return trigger !== 'submit';
  },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SyncValidationForm);