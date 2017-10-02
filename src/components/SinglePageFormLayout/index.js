import { Field, reduxForm } from 'redux-form';
import React from 'react';
import axios from 'axios';

import CategorySelectorField from '../CategorySelectorField';
import EstimatedDateSelectorField from '../EstimatedDateSelectorField';
import FormField from '../FormField';
import TextareaField from '../TextareaField';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Email inválido';
  }

  return errors;
};

const pricePreferences = [
  'Lo más barato',
  'Relación calidad precio',
  'Mejor calidad',
];

const SyncValidationForm = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="descripcion"
        component={TextareaField}
        label="Descripción"
      />
      <Field
        name="fechaEstimada"
        component={EstimatedDateSelectorField}
        label="Cuándo"
      />
      <Field
        name="categoria"
        component={CategorySelectorField}
        label="Categoría"
        categories={props.categories}
      />
      {pricePreferences.map((option, key) =>
        <Field
          component={FormField}
          key={key}
          label={option}
          name="preferenciaPrecio"
          type="radio"
          value={option}
        />
      )}
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

const onSubmit = (values, dispatch, { onClickSubmit }) => onClickSubmit(values);

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
  asyncValidate,
  asyncBlurFields: ['email']
})(SyncValidationForm);