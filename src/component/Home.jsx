import React from 'react';
import Products from '../component/Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="Image3.png"
          className="Image3.png" 
          alt="Background"
          style={{ height: '500px', objectFit: 'cover', backgroundSize:'cover' }} // Ensure the image covers the card area
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 text-dark">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
