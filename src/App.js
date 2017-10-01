import React, { Component } from 'react';

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
        <SinglePageFormLayout onClickSubmit={console.log}/>
      </div>
    );
  }
}

export default App;
