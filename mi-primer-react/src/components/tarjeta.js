import React, { Component } from 'react';

class Tarjeta extends Component {

    state = {
        nombre: 'Mr Dog El Perro',
        url: "https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
    }

    render() { 
        return <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={this.state.url} />
            <div className="card-body">
              <p className="card-text">
                {this.state.nombre}
              </p>
            </div>
          </div>;
    }
}
 
export default Tarjeta;