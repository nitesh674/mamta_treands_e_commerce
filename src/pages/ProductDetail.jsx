// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail({ addToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
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

  const handleAddToCart = () => {
    console.log("Adding to cart from ProductDetail:", product);
    if (addToCart) addToCart(product);
  };

  if (loading) return <div className="container my-5">Loading…</div>;
  if (!product) return <div className="container my-5">Product not found</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              maxHeight: 500,
            }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h3 className="my-3">${product.price}</h3>
          <p>{product.description}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="btn btn-danger text-light"
            >
              Add to Cart
            </button>

            {/* Bootstrap 5 modal trigger */}
            <button
              type="button"
              className="btn btn-danger text-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              Buy Now
            </button>
          </div>

          {/* Bootstrap 5 modal */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Your Oder
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  ✅ Order placed successfully!
                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
