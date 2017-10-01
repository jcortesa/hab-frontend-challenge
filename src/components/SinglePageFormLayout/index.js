import { Field, reduxForm } from 'redux-form';
import React from 'react';

import FormField from '../FormField';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Email inválido';
  }

  return errors;
};

const SyncValidationForm = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          component={FormField}
          label="Email"
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

export default reduxForm({
  form: 'budgetForm',
  validate,
  onSubmit,
})(SyncValidationForm);