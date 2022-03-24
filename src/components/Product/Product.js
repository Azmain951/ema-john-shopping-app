import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, price, seller, ratings, img } = product
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>Price: {price}</p>
                <div className="product-details">
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;