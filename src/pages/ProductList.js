import React, { useState, useEffect } from "react";
import axios from "axios";
import CartIcon from "./CartIcon";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://3.15.164.228:8082/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setProducts(response.data.docs);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/delete-product`, {
        data: { productId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  const cartCount = cartItems.length;

  const toggleCartPopup = () => {
    setShowCartPopup((prevShowCartPopup) => !prevShowCartPopup);
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
            <div className="product-buttons">
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="delete-product"
                onClick={() => handleDeleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-icon-container" onClick={toggleCartPopup}>
        <CartIcon count={cartCount} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
      {showCartPopup && cartCount > 0 && (
        <div className="cart-popup">
          <h3>Cart Items</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <p>{item.name}</p>
                <button onClick={() => handleRemoveFromCart(item._id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="close-button" onClick={toggleCartPopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
