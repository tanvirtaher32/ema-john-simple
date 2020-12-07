import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = total + prd.price;
        
    }
    let shipping = 0;
    if(total>500)
    {
        shipping+=10;
    }
    else if(total>=250 && total<=500)
    {
        shipping+=15;
    }
    else if(total>0 && total<250){
        shipping+=20;
    }
    let tax = (total/7.5);
    let subTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
    <h5>Items Ordered : {cart.length}</h5>
    <p>Price : {total.toFixed(2)}</p>
    <p>Shipping : {shipping.toFixed(2)}</p>
    <p>Tax : {Number (tax.toFixed(2))}</p>
    <p>Sub Total : {(subTotal).toFixed(2)}</p>
        </div>
    );
};

export default Cart;