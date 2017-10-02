import { Field, reduxForm } from 'redux-form';
import React from 'react';

import EstimatedDateSelectorField from '../../EstimatedDateSelectorField';
import TextareaField from '../../TextareaField';

const validate = (values) => {
  const errors = {};
  if (!values.descripcion) {
    errors.descripcion = 'Requerido';
  }

  return errors;
};

const SyncValidationForm = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Información general</legend>
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
      </fieldset>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={invalid || submitting}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

const onSubmit = (values, dispatch, { onSubmit }) => onSubmit();

export default reduxForm({
  validate,
  onSubmit,
  form: 'budgetForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SyncValidationForm);