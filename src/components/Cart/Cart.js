import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;