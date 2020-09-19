import React from 'react';

const Detalle = props => {
    const i = 0;
    const descuento =0
    if(props.productos === ""){
        return(
            <div></div>
        )
    }
    const {price, title, original_price} = props.productos;
    if(original_price != null){
        descuento = (Math.floor((100 - (price * 100) / original_price)))
    }
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-5 mb-4">
            <img src={props.productos.pictures[i].url} alt="" className="card-img-top"/>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">$ {price}</p>
                    <p className="card-text">{descuento + "% OFF"}</p>
                </div>
            </div>
        </div>
    )
}
export default Detalle;