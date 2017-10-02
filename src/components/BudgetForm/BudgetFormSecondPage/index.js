import { Field, reduxForm } from 'redux-form';
import React from 'react';

import CategorySelectorField from '../../CategorySelectorField';
import FormField from '../../FormField';

const pricePreferences = [
  'Lo más barato',
  'Relación calidad precio',
  'Mejor calidad',
];

const validate = (values) => {
  const errors = {};
  if (!values.categoria) {
    errors.categoria = 'Requerido';
  }

  return errors;
};

const SyncValidationForm = (props) => {
  const { handleSubmit, submitting, invalid, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
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
          Siguiente
        </button>
      </div>
    </form>
  );
};

const onSubmit = (values, dispatch, { onSubmit }) => onSubmit();

export default reduxForm({
  onSubmit,
  validate,
  form: 'budgetForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SyncValidationForm);