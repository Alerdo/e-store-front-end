import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

import { FaShoppingCart } from 'react-icons/fa';

const Checkout = () => {
  let sumPrice = parseFloat(localStorage.getItem('sumPrice')).toFixed(2);

  // const stripe = useStripe();
  // const elements = useElements();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: cardElement,
  //   });

  //   if (error) {
  //     console.log('[error]', error);
  //   } else {
  //     console.log('[PaymentMethod]', paymentMethod);
  //     // Here, you would send the paymentMethod.id to your server to handle the actual charge.
  //   }
  // };

  return (
    <div className="checkout-container">
         <div className="checkout-header">
            <FaShoppingCart className="checkout-icon" />
            <h1>Checkout</h1>
        </div>
        <p>Price to Pay: £{sumPrice}</p>
        <form onSubmit="">
            {/* Address Inputs */}
            <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" required />
            </div>

            <div className="input-group">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input type="text" id="addressLine1" required />
            </div>

            <div className="input-group">
                <label htmlFor="addressLine2">Address Line 2 (optional)</label>
                <input type="text" id="addressLine2" />
            </div>

            <div className="input-group">
                <label htmlFor="city">Town/City</label>
                <input type="text" id="city" required />
            </div>

            <div className="input-group">
                <label htmlFor="county">County</label>
                <input type="text" id="county" required />
            </div>

            <div className="input-group">
                <label htmlFor="postcode">Postcode</label>
                <input type="text" id="postcode" required />
            </div>

            <h2>Payment Details</h2>

            <div className="input-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" maxLength="19" placeholder="XXXX XXXX XXXX XXXX" required />
            </div>

            <div className="input-group">
                <label htmlFor="cardName">Cardholder Name</label>
                <input type="text" id="cardName" required />
            </div>

            <div className="input-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" maxLength="5" placeholder="MM/YY" required />
            </div>

            <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" maxLength="3" placeholder="XXX" required />
            </div>
            <p> £{sumPrice}</p>
            <div className='purchase'>
            
            <button className="purchase-button" type="submit">
                Purchase & Order
            </button>
            </div>
        </form>
    </div>
);

  }

export default Checkout;
