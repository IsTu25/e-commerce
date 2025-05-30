import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {TotalCartItem} =useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="navmenu">
        <li onClick={() => setMenu("shops")}>
          <Link style={{textDecoration:'none'}} to="/">Shop</Link>
          {menu === "shops" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{textDecoration:'none'}} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{textDecoration:'none'}} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{textDecoration:'none'}} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-log-in-cart">
        <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{TotalCartItem()}</div>
      </div>
    </div>
  );
};
