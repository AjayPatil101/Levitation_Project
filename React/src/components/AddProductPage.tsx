import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import swal from 'sweetalert';

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productRate, setProductRate] = useState("");

  const navigate = useNavigate();

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const product = { name: productName, qty: productQty, rate: productRate };

    try {
      const response = await UserService.insert(product);
      console.log(response.data.success);
      
      if (response.data.success) {
        swal("Good job!", response.data.message, "success");
        navigate("/products");
      } else {
        swal("Oops!", response.data.message, "error");
      }
    } catch (error:any) {
      if (error.response && error.response.data && error.response.data.message) {
        swal("Oops!", error.response.data.message, "error"); // Adjust accordingly if the error structure is different
      } else {
        swal("Oops!", error.response.data.message, "error"); // Fallback error message
      }
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={productQty}
          onChange={(e) => setProductQty(e.target.value)}
          placeholder="Product Qty"
          required
        />
        <input
          type="number"
          value={productRate}
          onChange={(e) => setProductRate(e.target.value)}
          placeholder="Product Rate"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
