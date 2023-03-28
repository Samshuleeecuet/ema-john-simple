import React from 'react';
import './Cart.css';

const Cart = (props) => {
   //console.log(props.cartlist);
   let total = 0;
   let totalShipping = 0;
   for (const product of props.cartlist){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
   }
    return (
        <div className='cart-container'>
            <h4>Order Summary</h4>
            <p>Selected Item:{props.cartlist.length} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${(total*7/100)}</p>
            <h6>Grand Total: ${total+totalShipping+(total*7/100)}</h6>
        </div>
    );
};

export default Cart;