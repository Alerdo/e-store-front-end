import React, { useState, useEffect } from 'react';
import './Product.css';
import Modal from '../modale/Modale.js';

const herokuDb = "https://e-store-backendd-16f7136900ad.herokuapp.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${herokuDb}/products`);
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

  const addToCart = async (id, name) => {
    try {
      const response = await fetch(`${herokuDb}/cart_items/add-item`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ product_id: id, quantity: quantities[id] }),
      });
      const data = await response.json();
      if (data.message) {
        setModalMessage(<><strong>{name}</strong> successfully added to the cart</>);  // Updated line
        setModalOpen(true);
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
          <div key={product.id} className="card">
            <img src={product.image_url} alt={product.name} width="78%" height="210px" loading="lazy" />
            <h2>{product.name}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'>£{product.price}</p>
            <div>
              <button className="button1" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              {quantities[product.id]}
              <button className="button1" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              <button className="button1 add-card" onClick={() => addToCart(product.id, product.name)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p className='message'>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default Products;
