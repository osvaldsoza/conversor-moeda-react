import React from 'react';
import './App.scss';
import Conversor from './components/Conversor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="d-container d-flex flex-column align-items-center">
            <h2>Conversor de Moedas</h2>
            <div className="d-conversor">
                <Conversor moedaA="USD" moedaB="BRL"/>
                <Conversor moedaA="BRL" moedaB="USD"/>
            </div>
            <div className="d-conversor">
                <Conversor moedaA="CAD" moedaB="BRL"/>
                <Conversor moedaA="BRL" moedaB="CAD"/>
            </div>
            <div className="d-conversor">
                <Conversor moedaA="EUR" moedaB="BRL"/>
                <Conversor moedaA="BRL" moedaB="EUR"/>
            </div>
        </div>
    );
}

export default App;
