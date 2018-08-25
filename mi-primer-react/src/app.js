import React, { Component } from 'react';
import VerArticulos from './components/verarticulos.js'
import Contador from "./components/contador.js";
import HolaMundo from "./components/holamundo.js";
import Tarjeta from "./components/tarjeta.js";

class App extends Component {

    state = {}

    render() { 
        return (
            <div>
                <Tarjeta />
                <HolaMundo />
                <VerArticulos />
            </div>
            
        );
    }
}
 
export default App;