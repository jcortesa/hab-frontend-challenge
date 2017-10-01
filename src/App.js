import React, { Component } from 'react';
import axios from 'axios';

import SinglePageFormLayout from './components/SinglePageFormLayout';

import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Solicitud presupuesto</h1>
        </header>
        <SinglePageFormLayout onClickSubmit={(values) =>
          axios.post(
            'http://localhost:8000/app_dev.php/budgets',
            {
              description: values.descripcion,
              category: values.categoria,
              email: values.email,
              phone: values.telefono,
              address: values.direccion,
            },
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            }
          )}
        />
      </div>
    );
  }
}

export default App;
