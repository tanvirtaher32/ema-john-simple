import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="products">

            <div>
                <img src={img}></img>
            </div>

            <div className="product">
                <h3 className="productName">{name}</h3>
                <br/>
                 <p>Product By: {seller}</p>
    
    <p><strong>${price}</strong></p>
    <br/>
    <p>Only {stock} products left in the stock</p>
    <button className="cart-btn"  onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>

        </div>
       
    );
};

export default Product;