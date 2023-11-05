import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Route, Routes, NavLink } from "react-router-dom";
import Products from './components/product/Product';
import Login from './components/login/Login';
import CartItems from './components/cart/CartItems';
import AboutUs from './components/about/AboutUs';
import Checkout from './components/checkout/Checkout';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import { FaTshirt, FaInfoCircle, FaShoppingCart, FaCashRegister, FaUserCircle, FaBars, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const baseURL = "https://api.alerdo-ballabani.co.uk";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartNr, setCartNr] = useState(0);
 
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);



  const navigate = useNavigate();  // Import useNavigate from 'react-router-dom'



  
  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${baseURL}/cart_items/items`, { credentials: 'include' });
      const data = await response.json();
      console.log("Cart Items Data:", data);  // Added this line to log the data
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
    
  }, []);


  useEffect(() => {
    if(cartItems) {
      setCartNr(cartItems.length);
    }
    
  }, [cartItems]);









   // const [login, setLogIn] = useState(false);
  // const handleLogin = (newLoginState) => {
  //   setLogIn(newLoginState);
  //   console.log(login)
  //   if (newLoginState) {
  //     navigate('/products'); 
  //   }
  // };


  
  const logout = async () => {
    try {
      const response = await fetch(`${baseURL}/authentication/logout`, {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await response.json(); // Fixed line
  
      if (data.success) {
        // localStorage.setItem('isLoggedIn', 'false');  
        fetchCartItems()
        navigate('/login');  // Redirect to home page
        console.log(response);
      } else {
        alert('Failed to logout: ' + data.message);
      }
  
    } catch (error) {
      alert('An error occurred while trying to logout: ' + error.message);
      console.log(error);
    }
  };



  return (
    <>
      <header className="bg-dark">
        <nav>
          <ul className="list-unstyled d-flex ">
            <li className="mr-3"><NavLink to="/" className="text-white nav-link"><FaTshirt /><span className="d-none d-sm-inline"> Products</span></NavLink></li>
            <li className="mr-3"><NavLink to="/about-us" className="text-white nav-link"><FaInfoCircle /><span className="d-none d-sm-inline"> About Us</span></NavLink></li>
            <li className="mr-3"><NavLink to="/cart" className="text-white nav-link nav-link-cart"><FaShoppingCart /><span className="d-none d-sm-inline"> Cart </span>{cartNr > 0 && <span className="cart-number">[{cartNr}]</span>}    </NavLink>
          </li>
          <li className="mr-3"><NavLink to="/checkout" className="text-white nav-link"><FaCashRegister /><span className="d-none d-sm-inline"> Checkout</span></NavLink></li>
          <li className="mr-3"><NavLink to="/profile" className="text-white nav-link"><FaUserCircle /><span className="d-none d-sm-inline"> Profile</span></NavLink></li>
        </ul>
      </nav>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="p-3">
        <DropdownToggle nav caret className="text-white">
          <FaBars /><span className="d-sm-inline"> User</span>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-full-height">
          <DropdownItem>
            <NavLink to="/login" className="nav-link"><FaSignInAlt /><span className=" d-sm-inline"> Login</span></NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink to="/register" className="nav-link"><FaUserPlus /><span className=" d-sm-inline"> Register</span></NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink onClick={logout} className="nav-link"><FaSignOutAlt /><span className=" d-sm-inline"> Logout</span></NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </header>

      <main>
        <Routes>
          <Route path='/login' element={<Login  fetchCartItems={fetchCartItems}/>} />
          <Route path="/" element={<Products setCartItems={setCartItems} fetchCartItems={fetchCartItems} cartItems={cartItems} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<CartItems cartItems={cartItems} setCartItems={setCartItems} fetchCartItems={fetchCartItems} setCartNr={setCartNr} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
