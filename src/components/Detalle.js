import React from 'react';

const Detalle = props => {
    const i = 0;
    var descuento = 0
    if (props.productos === "") {
        return (
            <div></div>
        )
    }
    const { price, title, original_price } = props.productos;
    if (original_price != null) {
        descuento = (Math.floor((100 - (price * 100) / original_price)))
    }
    return (
        <div className="card-group">
            <div className="card bg-primary">
                <div className="card-body text-center">
                    <img className="card-img-top" src={props.productos.pictures[i].url} alt=" " width="100" height="300"/>
                    
                </div>
            </div>
            <div className="card bg-warning">
                <div className="card-body text-center">
                    <h1 className="card-text">{title}</h1>
                    <h4 className="card-text">$ {price}</h4>
                    <h4 className="card-text">{descuento + "% OFF"}</h4>
                </div>
            </div>
        </div>
    )
}
export default Detalle;