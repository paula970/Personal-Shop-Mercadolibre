import React, { Component } from 'react';
import Paginacion from './Paginacion';
import Products from './Products'; 

class Result extends Component{
    //definir método para mostrar los productos
    mostrarProductos = () =>{
        const productos = this.props.productos
        
        if(productos.length == 0) return null;
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {productos.map(products =>(
                        <Products
                            key={products.id}
                            products={products}
                        />
                    ))}

                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                
                />
            </React.Fragment>
        )

    }
    render(){
        return(
            <React.Fragment>
                {this.mostrarProductos()} 
            </React.Fragment> 
        );
    }

}

export default Result;