import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';

const baseURL = "https://api.alerdo-ballabani.co.uk";

const CartItems = ({ cartItems, setCartItems, fetchCartItems, setCartNr }) => {

  const navigate = useNavigate();

  useEffect(() => {
    setCartNr(cartItems.length);
  }, [cartItems]);

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);


  const proceedToCheckout = () => {
    navigate('/checkout');
  };



  localStorage.setItem('sumPrice', totalPrice);

  const removeItem = async (itemId) => {
    try {
      const response = await fetch(`${baseURL}/cart_items/remove-item`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: itemId }),
      });

      if (response.status === 200) {
        fetchCartItems();
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
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>{item.quantity * item.product.price}{item.quantity > 1 && <span>x{item.quantity}</span>}</td>
              <td><button className="remove-button" onClick={() => removeItem(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">Total: £{totalPrice.toFixed(2)}</div>
      <div className="checkout-button-container"><button className="checkout-button" onClick={proceedToCheckout}>Proceed to Checkout</button></div>
    </div>
  );
};

export default CartItems;
