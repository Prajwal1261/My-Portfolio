import React from 'react';
import { Link } from 'react-router-dom';

function BodyContainer() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem', 
      color: '#333' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color:"white" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color:"white" }}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          color: '#1976d2',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        ← Go back to Home
      </Link>
    </div>
  );
}

export default BodyContainer;
