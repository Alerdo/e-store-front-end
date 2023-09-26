import React, { useState } from 'react';
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Products from './Products';
import Login from './Login';
import CartItems from './CartItems';
import AboutUs from './AboutUs';
import Checkout from './Checkout';
import Profile from './Profile';
import Register from './Register';
import "./App.css";

// Remember to use your own Stripe public key here
// const stripePromise = loadStripe("your-public-key-here");

// const [cartNr, setCart] = useState(0);

function App() {
  const [login, setLogIn] = useState(false);
  const navigate = useNavigate();  // Import useNavigate from 'react-router-dom'

  // Function to update login state and navigate to /products
  const handleLogin = (newLoginState) => {
    setLogIn(newLoginState);
    console.log(login)
    if (newLoginState) {
      navigate('/products'); // Navigate to /products when login state becomes true
    }
  };
  return (
    <>
    {/* // <Elements stripe={stripePromise}> */}
    <header>
    <nav>
      <ul >
      <nav>
  <ul>
   
    <li><NavLink to="/" activeclassname="active-link">Products</NavLink></li>
    <li><NavLink to="/about-us" activeclassname="active-link">About Us</NavLink></li>
    <li><NavLink to="/cart" activeclassname="active-link">Cart</NavLink></li>
    <li><NavLink to="/checkout" activeclassname="active-link">Checkout</NavLink></li>
    <li><NavLink to="/profile" activeclassname="active-link">Profile</NavLink></li>
    <li><NavLink to="/login" activeclassname="active-link">Login</NavLink></li>
    <li><NavLink to="/register" activeclassname="active-link">Register</NavLink></li>
  </ul>
</nav>
        {/* <li><Link to="/logout">Logout</Link></li> */}
      </ul>
    </nav>
    </header>

    <main>
    <Routes>
      <Route path='/login' element={<Login setLogIn={handleLogin} />} />
      
    <Route path="/" element={<Products />} />


      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cart" element={<CartItems />} />
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
