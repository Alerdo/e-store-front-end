import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const Checkout = () => {
  const sumPrice = localStorage.getItem('sumPrice');
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
      <h1>Checkout</h1>
      <p>Price to Pay: {sumPrice}</p>
      <form onSubmit="">
        {/* <CardElement /> */}
        <button type="submit" >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
