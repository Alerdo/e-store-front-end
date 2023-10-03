import React, { useState } from 'react';
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Products from './components/product/Product';
import Login from './components/login/Login';
import CartItems from './components/cart/CartItems';
import AboutUs from './components/about/AboutUs';
import Checkout from './components/checkout/Checkout';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
// import Logout from './components/logout/Logout';

import { FaTshirt, FaInfoCircle, FaShoppingCart, FaCashRegister, FaUserCircle, FaBars, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// Remember to use your own Stripe public key here
// const stripePromise = loadStripe("your-public-key-here");

// const [cartNr, setCart] = useState(0);

const baseURL = "https://e-store-backendd-16f7136900ad.herokuapp.com/"

function App() {
  const [login, setLogIn] = useState(false);
  const navigate = useNavigate();  // Import useNavigate from 'react-router-dom'

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [cartNr, setCartNr] = useState(0);
  // Function to update login state and navigate to /products
  const handleLogin = (newLoginState) => {
    setLogIn(newLoginState);
    console.log(login)
    if (newLoginState) {
      navigate('/products'); // Navigate to /products when login state becomes true
    }
  };


  
  const logout = async  () => {
    try {
      const response = await fetch(`${baseURL}/authentication/logout`, {
          method: 'POST',  
          credentials: 'include',
      });
      const data = response.json()


      if (data) {
        navigate('/login');  // Redirect to home page
        console.log(response)
      } else {
        navigate('/login');
        alert('Failed to logout: ' + data.message);
      }

    } catch (error) {
      alert('An error occurred while trying to logout: ' + error.message);
      console.log(error)
    }
 

  
};

  return (
    <>
    {/* // <Elements stripe={stripePromise}> */}
    <header className="bg-dark">
  <nav>
    <ul className="list-unstyled d-flex p-3">
      <li className="mr-3"><NavLink to="/" className="text-white"><FaTshirt /><span className="d-none d-sm-inline"> Products</span></NavLink></li>
      <li className="mr-3"><NavLink to="/about-us" className="text-white"><FaInfoCircle /><span className="d-none d-sm-inline"> About Us</span></NavLink></li>
      <li className="mr-3">
        <NavLink to="/cart" className="text-white">
          <FaShoppingCart /><span className="d-none d-sm-inline"> Cart</span> {cartNr > 0 && <span className='cartNr'>[{cartNr}]</span>}
        </NavLink>
      </li>
      <li className="mr-3"><NavLink to="/checkout" className="text-white"><FaCashRegister /><span className="d-none d-sm-inline"> Checkout</span></NavLink></li>
      <li className="mr-3"><NavLink to="/profile" className="text-white"><FaUserCircle /><span className="d-none d-sm-inline"> Profile</span></NavLink></li>
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
      <Route path='/login' element={<Login setLogIn={handleLogin} />} />
      
    <Route path="/" element={<Products />} />


      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cart" element={<CartItems setCartNr={setCartNr} />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      
     
    </Routes>
    </main>
    <footer></footer>
    {/* </Elements> */}
    </>
  );
}


export default App;
