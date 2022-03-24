import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, price, seller, ratings, img } = product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;