import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CardProduct({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cart updated in CardProduct:", cart);
  }, [cart])

  const makeSlug = (title, id) => {
    return `${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${id}`;
  };
  // ✅ Fetch products from backend API

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setLoading(false);
      });
  }, []);
  const handleAddToCart = (item) => {
    console.log("Adding to cart line 53:", item);
    const productData = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      qty: 1,
    };

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (product) => product.id === productData.id
      );

      // If product already exists → increase qty
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === productData.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      }

      return [...prevCart, productData];
    });
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center mb-5">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="product-card h-100">

                {/* Image */}
                <div className="product-img ">
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() =>
                      navigate(`/product/${makeSlug(item.title, item.id)}`)
                    }
                  />
                </div>

                {/* Content */}
                <div className="product-body">
                  <h6 className="product-title title-truncate">{item.title}</h6>

                  <div className="rating">
                    ★★★★☆ <span>(123)</span>
                  </div>

                  <div className="price">${item.price}</div>

                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5 btn-box ">
          <a href="/products" className="btn btn-outline-dark px-4 py-2 fw-semibold">
            View All Products
          </a>
        </div>
      </div>
    </section>

  );
}
