import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-text">
        Welcome to [Your E-commerce Store], your one-stop destination for the finest products. 
        Established in [Year], we have been dedicated to providing exceptional customer service 
        and high-quality products that align with your needs and lifestyle.
      </p>

      <h2 className="about-us-subtitle">Our History</h2>
      <p className="about-us-text">
        Our store was founded by [Founder's Name] with the vision of making quality products accessible 
        to everyone. Since our inception, we have served thousands of customers and have expanded our 
        product range to include items across multiple categories.
      </p>

      <h2 className="about-us-subtitle">Our Products</h2>
      <p className="about-us-text">
        We offer a wide range of products, including [list some of your top categories or products here].
        Each of our products is carefully curated to ensure that it meets our high quality standards.
      </p>

      <h2 className="about-us-subtitle">Special Offers</h2>
      <p className="about-us-text">
        We regularly feature special offers and discounts as a token of appreciation for our valued customers.
      </p>

      <h2 className="about-us-subtitle">Our Commitment</h2>
      <p className="about-us-text">
        Customer satisfaction is our top priority. Our dedicated team is always here to assist you with any queries 
        or concerns you may have. We look forward to serving you!
      </p>
    </div>
  );
};

export default AboutUs;
