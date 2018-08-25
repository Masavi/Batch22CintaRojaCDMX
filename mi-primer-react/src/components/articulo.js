import React, { Component } from 'react';

class Articulo extends Component {
    constructor(props){
        super(props);
        //console.log(props);
        const {nombre, precio, existencia, descripcion} = this.props;
        this.state = {
            nombre: nombre,
            precio: precio,
            existencia: existencia,
            descripcion: descripcion
        }
    }

    render() { 
        return( 
            <div className="bg-info m-2">
                <h2>{this.state.nombre}</h2>
                <p>{this.state.descripcion}</p>
            </div>
        );
    }
}
 
export default Articulo;