import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const {id,category,name,price,quantity,seller,img,ratings}= props.product;
    const addToCart = props.addToCart;

    
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
                <button onClick={()=> addToCart(props.product)}>Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    );
};

export default Product;