
import Products from './Products';
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import "./App.css";
import Login from './Login';
import CartItems from './CartItems';
import Logout from './Logout';
import { useState } from 'react';
import AboutUs from './AboutUs';


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
    <header>
    <nav>
      <ul >
      <li><Link to="/">Login</Link></li>

        <li><Link to="/products">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
    </header>

    <main>
    <Routes>
      <Route path='/' element={<Login setLogIn={handleLogin} />} />
      
    <Route path="/products" element={<Products />} />


      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cart" element={<CartItems />} />
      <Route path="/profile" element={<h1>Porfile</h1>} />
      <Route path="/logout" element={<Logout />} />
      
     
    </Routes>
    </main>
    <footer></footer>
    </>
  );
}


export default App;
