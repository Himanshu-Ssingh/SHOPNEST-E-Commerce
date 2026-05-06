import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '50px 30px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/order_success.png" 
        alt="Order Placed Successfully" 
        style={{ width: '100%', maxWidth: '300px', margin: '0 auto 20px', display: 'block', borderRadius: '12px' }} 
      />
      <h2 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#10b981' }}>Congratulations!</h2>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#f97316' }}>Your Order is Placed.</h3>
      <p style={{ color: '#a1a1aa', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6' }}>
        Thank you for shopping with us! We have successfully received your order and will process your shipment shortly.
      </p>
      <Link to="/shop" className="btn">Continue Shopping</Link>
    </div>
  );
};

export default OrderSuccess;
