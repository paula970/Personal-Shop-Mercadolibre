import React from 'react';
import { Link } from 'react-router-dom'
//no se coloca component ya que este es un componente funcional 

const Products = (props) => {

    const {thumbnail, price, title, seller,id} = props.products;
    //const b = seller.id;
    //console.log(b);
    // se lleva al componente principal 
    //this.props.vendedorID(b);
    //props.Products.vendedorID(b);
    //props.Products.vendedorID(b);
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <li key={id}>
                    <Link to={`/productos/${id}`}>
                        <img src={thumbnail} alt="" className="card-img-top"/>
                    </Link>
                </li>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">$ {price}</p>
                    <p className="card-text">{seller.id} yei</p>
                    

                </div>

            </div>
        </div>
    )

}

export default Products;