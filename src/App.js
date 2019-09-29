import React from 'react';
import './App.css';
import Conversor from './components/Conversor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <h2>Conversor de Moedas</h2>
      <div className=" d-flex justify-content-sm-around">
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </div>
      <div className=" d-flex justify-content-sm-around">
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
      </div>
      <div className="d-flex justify-content-sm-around">
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </div>
    </div>
  );
}

export default App;
