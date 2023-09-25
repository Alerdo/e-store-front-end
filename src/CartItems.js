import React, { useState, useEffect } from 'react';
import './CartItems.css'; // Make sure you create this CSS file

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:3001/cart_items/items', {
        credentials: 'include',  // Important
      });
      const data = await response.json();
      setCartItems(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const proceedToCheckout = () => {
    alert('Proceeding to checkout...');
  };

  const removeItem = async (itemId) => {
    try {
      const response = await fetch('http://localhost:3001/cart_items/remove-item', {
        method: 'DELETE',
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
  

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart:</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Items Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}  <span>x{item.quantity}</span></td>
              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        Sum: {totalPrice}
      </div>
      <div className="checkout-button">
        <button onClick={proceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
