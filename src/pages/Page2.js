import React, { Component,useState } from 'react';
import Detalle from '../components/Detalle';

class Page2 extends Component{
    state = {
        productoID:''
    };
    
    async componentDidMount(){
        const response = await fetch(`https://api.mercadolibre.com/items/${this.props.match.params.id}`);
        const json = await response.json();
        this.setState({ productoID: json });
    }   
    render() {
        return(
            <div className="app container">
                <div className="jumbotron">
                    <h1 className="lead text-center">PaulaMP Shop</h1>
                        <Detalle
                            productos =  {this.state.productoID}
                        />
                </div>
            </div>
        );
    }

}
export default Page2;