import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>

            <div className="products-container">
                <Product key={products.id} products={products}></Product>
            </div>

            <div className="cart-container">

            </div>

        </div>
    );
};

export default Shop;