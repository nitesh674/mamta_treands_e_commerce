import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const { slug } = useParams();
  const navigate = useNavigate();

  const id = slug?.split("-").pop(); // ✅ ID extracted

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || isNaN(id)) {
      setProduct(null);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!res.ok) throw new Error("Not found");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-danger" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h3>❌ Product not found</h3>
        <button
          className="btn btn-danger mt-3"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", maxHeight: 500, objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-danger">${product.price}</h3>
          <p>{product.description}</p>

          <button
            className="btn btn-danger"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
