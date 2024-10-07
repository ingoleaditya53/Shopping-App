import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm"; // Import the LoginForm component

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false); // State to manage checkout
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setIsCheckout(true); // Show the login form
  };

  const handleOrderDelivered = (email) => {
    setIsCheckout(false); // Hide the login form on successful order delivery
    alert(`Order registered successfully! A confirmation has been sent to ${email}.`);
  };

  if (isCheckout) {
    return <LoginForm onOrderDelivered={handleOrderDelivered} />;
  }

  if (cart.length === 0) {
    return (
      <div className="container my-5 py-5 text-center">
        <h2>Your cart is empty!</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5 py-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <div className="row justify-content-center">
        {cart.map((item) => (
          <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-danger mt-auto" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center">Total: ${getTotalPrice()}</h3>
      <div className="text-center">
        <button className="btn btn-success mt-4" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
