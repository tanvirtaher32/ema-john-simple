import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log("added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-conatiner">
            <div className="productsShow">
               
                    {
                        products.map(pd => <Product 
                            handleAddProduct= {handleAddProduct}
                            product = {pd}></Product> )
                    }
                
            </div>
            <div className="productCart">
                <Cart cart = {cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;