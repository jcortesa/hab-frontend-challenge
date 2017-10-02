import React from 'react';
import PropTypes from 'prop-types';

import BudgetFormFirstPage from './BudgetFormFirstPage';
import BudgetFormSecondPage from './BudgetFormSecondPage';
import BudgetFormThirdPage from './BudgetFormThirdPage';

const BudgetForm = (props) => (
  <div>
    {
      props.formPage === 1 &&
      <BudgetFormFirstPage onSubmit={() => props.nextPage()} />
    }
    {
      props.formPage === 2 &&
      <BudgetFormSecondPage
        previousPage={() => props.previousPage()}
        onSubmit={() => props.nextPage()}
        categories={props.categories}
      />
    }
    {
      props.formPage === 3 &&
      <BudgetFormThirdPage
        previousPage={() => props.previousPage()}
        onSubmit={(values) => props.onSubmit(values)}
      />
    }
    {
      props.formPage === 4 &&
      <div>
        <h2>¡Formulario enviado correctamente!</h2>
        <button
          className="btn btn-primary"
          onClick={() => props.resetForm()}
        >
          Nuevo presupuesto
        </button>
      </div>
    }
  </div>
);

BudgetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default BudgetForm
