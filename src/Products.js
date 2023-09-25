import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);

      const initialQuantities = {};
      data.forEach(product => {
        initialQuantities[product.id] = 1;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + change)
    }));
  };

  // Function to handle adding to cart
  const addToCart = async (id) => {
    try {
      const response = await fetch('http://localhost:3001/cart_items/add-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Include credentials for cross-origin requests
        body: JSON.stringify({
          product_id: id,
          quantity: quantities[id],
        }),
      });
      const data = await response.json();
      if (data.message) {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  



  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    margin: '10px'
  };

  const cardStyle = {
    border: '1px solid black',
    padding: '16px',
    textAlign: 'center',
    margin: '20px'
  };

  return (
    <div>
      <h1>We sell these products:</h1>
      <div style={gridStyle}>
        {products.map(product => (
          <div key={product.id} style={cardStyle}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
            <p>{product.id}</p>
            <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
            {quantities[product.id]}
            <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
