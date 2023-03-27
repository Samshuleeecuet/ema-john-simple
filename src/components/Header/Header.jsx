import React from 'react';
import './Header.css';
import logo from '../../../ema-john-resources/images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} />
            <div>
                <a href="/shop">Order</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;