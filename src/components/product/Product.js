import React, { useState, useEffect } from 'react';
import './Product.css';

const herokuDb = "https://e-store-backendd-16f7136900ad.herokuapp.com"


const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${herokuDb}/products`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
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
      const response = await fetch(`${herokuDb}/cart_items/add-item`, {
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
        alert(data.message)
       
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  

  return (
    <>
   <h1 className="nextbuy-header">Welcome to <span className='next-buy'>NextBuy</span>!</h1>
<p className='intro'>Discover handpicked, high-quality products crafted with precision and love. Dive into a world where quality meets affordability.</p>

      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card" >
           <img  src={product.image_url} alt={product.name} width="78%" height="210px" loading="lazy" />
            <h2>{product.name}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'>£{product.price}</p>
            {/* <p>Stock: {product.stock_quantity}</p> */}
            {/* <p>{product.id}</p>
            <p>{product.image_url}</p> */}
            <div>
            <button className="button1" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
             {quantities[product.id]}
            <button className="button1" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            <button className="button1 add-card"  onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      </>
     
);
 
};

export default Products;
