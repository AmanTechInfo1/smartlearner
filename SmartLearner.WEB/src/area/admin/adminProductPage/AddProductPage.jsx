import React, { useState } from "react";

const AddProductPage = () => {
  const [newProduct, setNewProduct] = useState({ id: "", name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
    const id = Date.now().toString();
    const productWithId = { ...newProduct, id };
    console.log("New Product:", productWithId);
    setNewProduct({ id: "", name: "", price: "" });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
