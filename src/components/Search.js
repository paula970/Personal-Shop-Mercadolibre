import React, { Component } from 'react';

class Search extends Component {

    busquedaRef = React.createRef();
    obtenerProducto = (e) =>{
        e.preventDefault(); //método que previene la acción por default
        // se toma el valor del input
        const a = this.busquedaRef.current.value;

        // se lleva al componente principal 
        this.props.datosBusqueda(a);

    }

    render(){
        return(
            <form onSubmit={this.obtenerProducto}>
                <div className="row">
                    <div className="form-group col-md-8"></div>  {/* form group clase de boostrap*/}
                    {/* se crea un ref en el input para acceder al producto que el usuario desea buscar*/}
                    <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Buscar producto"/>
                </div>
                <div className="row">
                    <div className="form-group col-md-4"></div> 
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                </div>
            </form>
        );
    }
}

export default Search;