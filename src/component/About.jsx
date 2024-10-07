import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container my-5 d-flex align-items-center mt-4" style={{ height: '80vh' }}>
      <div className="row justify-content-center w-100 mt-4">
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <img src="Image4.png" className="img-fluid rounded" alt="About Us" />
        </div>

        {/* Text Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h2 className="mb-3">About Us</h2>
          <p>
            Welcome to MyShop! We are a leading online store offering a wide range of products.
            Our mission is to provide customers with quality products at competitive prices.
          </p>
          <p>
            At MyShop, we believe in customer satisfaction and strive to offer the best shopping experience possible.
            Our team is dedicated to providing exceptional service and ensuring that your needs are met.
          </p>
          <p>
            Thank you for choosing MyShop. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
