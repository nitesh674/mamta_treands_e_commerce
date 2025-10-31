import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardProduct({ addToCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Product fetch error:", err));
  }, []);

  const handleAddToCart = (item) => {
    const productData = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      qty: 1,
    };

    console.log("Product to add:", addToCart , productData);
    if (addToCart){
      console.log("Adding to cart:", productData);
      addToCart(productData)
      
    } else{
      console.log("addToCart function not provided");
    }

    // fetch("http://localhost:5000/api/cart/add", {
    //   method: "POST",
    //   credentials: "include",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(productData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("✅ Cart synced with backend:", data))
    //   .catch((err) => console.error("❌ Add to Cart error:", err));
  };


  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center mb-5">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
            >
              <div
                className="card shadow-sm border-0 rounded-3 flex-fill d-flex flex-column justify-content-between"
                style={{
                  transition: "0.3s ease",
                  minHeight: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div
                  className="p-3 bg-light d-flex align-items-center justify-content-center"
                  style={{ height: "250px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "230px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="fw-semibold text-truncate">{item.title}</h6>
                    <p className="text-warning mb-1">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <small className="text-muted">(123)</small>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6 className="fw-bold mb-0 text-dark">${item.price}</h6>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                      className="btn btn-dark text-warning px-3 py-2 rounded-1 fw-semibold"
                      style={{ fontSize: "0.9rem" }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
