import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import VerArticulos from './components/verarticulos.js';
import CrearArticulo from './components/creararticulo.js';

class App extends Component {

    state = {}

    render() { 
        return (

            <BrowserRouter>
                <main>
                    <Route exact path="/creararticulo" component={CrearArticulo} />
                    <Route exact path="/verarticulos" component={VerArticulos} />   
                </main>
            </BrowserRouter>
            
        );
    }
}
 
export default App;