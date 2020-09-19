import React from 'react';
import { useAsync } from "react-async"

const Detalle = props => {
    //const { title } = (props.products)
    const i = 0;
    //const image = ''
    if(props.productos === ""){
        return(
            <div></div>
        )
    }
    console.log("felicidades",props.productos.pictures[i].url)
    const {price, title, original_price} = props.productos;
    //{(Math.floor((100 - (price * 100) / original_price))) + "% OFF"}
    //image = props.productos.pictures[i].url
    
    //await const a = props.productos.pictures[0]BORRAR
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <img src={props.productos.pictures[1].url} alt="" className="card-img-top"/>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">$ {price}</p>
                    <p className="card-text">{(Math.floor((100 - (price * 100) / original_price))) + "% OFF"}</p>
                    
                    
                </div>

            </div>
        </div>
    )
}
export default Detalle;