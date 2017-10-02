import React from 'react';

import BudgetForm from '../BudgetForm';

import logo from '../../images/logo.png';
import './styles.css';

const AppLayout = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Solicitud presupuesto</h1>
    </header>
    <BudgetForm
      onSubmit={(values) => props.createBudget(values)}
      categories={props.categories}
      formPage={props.formPage}
      nextPage={props.nextPage}
      previousPage={props.previousPage}
      resetForm={props.resetForm}
    />
  </div>
);

export default AppLayout;
