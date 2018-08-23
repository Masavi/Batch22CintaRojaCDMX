import React, { Component } from 'react';
//import Tarjeta from './components/tarjeta';
import Contador from './components/contador';

class App extends Component {

    state = {
        contadores: [
            'Omega', 
            'Foxtrot',
            'Charlie'
        ]
    }

/*     borrarComponente(){
        
        setState({
            contadores: []
        })
    } */

    render() { 
        return (
            <div>
                {this.state.contadores.map(contador => <Contador onDelete={this.borrarComponente} key={contador} id={contador}>{contador}</Contador>)}
            </div>
        );
    }
}
 
export default App;