import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../CartLocal/fakedb';
import Product from '../Product/Product';
import './Shop.css';





const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(products => setProducts(products))
    },[])

    
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added product
        for(const id in storedCart){
            // step 2: get product the id of the added product
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart data
        setCart(savedCart);
    },[products])

    const addToCart = (product) => {
        //console.log(product);
        // const newCart = [...cart,product];
        let newCart = [];
        const exists = cart.find(c => c.id === product.id);
        if(!exists) {
            product.quantity = 1;
            newCart = [...cart,product];
        }else{
            exists.quantity= exists.quantity +1;
            const remaining = cart.filter(pd => pd.id !==product.id);
            newCart =[...remaining,exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product = {product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cartlist = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;