import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {category,name,price,quantity,seller,img,ratings}= props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img}></img>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div className="btn-cart">
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;