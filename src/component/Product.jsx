import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []); // Initialize cart from local storage

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to local storage
    alert(`${product.title} added to cart!`); // Optional alert for feedback
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No Product Found</div>;

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card p-3" style={{ maxWidth: '500px' }}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top"
          style={{ height: '400px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">${product.price}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Category: </strong>{product.category}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary mt-3 me-2">
            Add to Cart
          </button>
          <Link to="/products" className="btn btn-dark mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
