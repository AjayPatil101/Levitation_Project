import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    UserService.paginated()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <main className="container" style={{ marginTop: "20px" }}>
      <div
        className="card"
        style={{
          background: "#fefbffff",
          color: "#19747E",
          marginTop: "20px",
          border: "2px solid hsla(0, 0%, 100%, 0.55)",
          borderRadius: "10px",
        }}
      >
        <h2
          className="text-center"
          style={{ fontFamily: "Times New Roman", marginTop: "20px" }}
        >
          List of Product
        </h2>
        <Link to="#" className="btn btn-primary mb-2">
          Add Product
        </Link>
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>{product.rate}</td>
                <td>{product.rate*product.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="#" className="btn btn-primary mb-2">
          Add Product
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
