import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    status: "",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://3.15.164.228:8082/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.15.164.228:8082/add-product",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Product added successfully:", response.data);

      setFormData({
        name: "",
        description: "",
        price: "",
        status: "",
      });

      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://3.15.164.228:8082/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add Product</button>
      </form>

      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleDeleteProduct(product._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
