import React, { Component } from 'react';
import Search from '../components/Search';
import Result from '../components/Result';
//import Products from './Products'; 

class Page1 extends Component {

  state={
    termino : '',
    productos:[], //: porque es un objeto
    pagina: '',
    idVendedor: '',
    idProducto:''
  }

  scroll=()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
//crear metodos para la paginacion
  paginaAnterior=()=>{
    // leer el state de la página actual
    let pagina = this.state.pagina;

    //en caso de ser la primera página
    if(pagina == 0) return null;

    //restar uno a la pagina actual
    pagina--;

    //agregar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente=()=>{
    // leer el state de la página actual
    let pagina = this.state.pagina;

    //sumar uno a la pagina actual
    pagina++;

    //agregar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const offset = pagina * 50;
    const idVendedor = this.state.idVendedor;
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${termino}&offset=${offset}`;
    const urlV = `https://api.mercadolibre.com/users/${idVendedor}`;
    console.log(url)
    
    //usar fetch que es parte de JS
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ productos : resultado.results}) )
  }

  vendedorID = (idVendedor)=>{
    this.setState({
      idVendedor : idVendedor,
    }, ()=>{
      this.consultarApi();
    })
  }

  datosBusqueda = (termino)=>{
    this.setState({
      termino : termino,
      pagina : 0
    }, ()=>{
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">PaulaMP Shop</p>
          <Search
          datosBusqueda={this.datosBusqueda}
          />
  
        </div> 
        <div className="row justify-content-center">
        <Result
        productos = {this.state.productos}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
        /> 

        </div>
   
      </div>
    );
  }
}
export default Page1;
