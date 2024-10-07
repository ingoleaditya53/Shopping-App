import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Set initially to all products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category
  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  // Render loading, error, and product list states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className='text-center'>Latest Products</h2>
      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-dark mx-2" onClick={() => filterProducts('All')}>All</button>
        <button className="btn btn-dark mx-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-dark mx-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-dark mx-2" onClick={() => filterProducts('jewelery')}>Jewellery</button>
        <button className="btn btn-dark mx-2" onClick={() => filterProducts('electronics')}>Electronics</button>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '300px', objectFit: 'contain' }} // Adjust height and fit
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-dark mt-auto align-self-center">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
