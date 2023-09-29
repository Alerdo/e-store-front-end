



import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';

const CartItems = ({ setCartNr }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 
  

  useEffect(() => {
   
    fetchCartItems();
  }, []);

  useEffect(() => {
    setCartNr(cartItems.length);
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:3001/cart_items/items', {
        credentials: 'include',
      });

      const data = await response.json();
      if (data.message){
        alert(data.message)
        navigate('/login');
        return;
      }

      
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const proceedToCheckout = () => {
    navigate('/checkout');
  };
  
  localStorage.setItem('sumPrice', totalPrice);

  const removeItem = async (itemId) => {
    try {
      const response = await fetch('http://localhost:3001/cart_items/remove-item', {
        method: 'DELETE' ,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important
        body: JSON.stringify({ id: itemId }),
      });
  
      if (response.status === 200) {
        // Remove the item from local state for immediate UI update
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to remove item');
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart:</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cartItems) && cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>{item.quantity * item.product.price}  {item.quantity > 1 && <span>x{item.quantity}</span>}</td>
              <td>
                <button className="remove-button" onClick={() => removeItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        Total: £{totalPrice.toFixed(2)}
      </div>
      <div className="checkout-button-container">
        <button className="checkout-button" onClick={proceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
);

};

export default CartItems;
