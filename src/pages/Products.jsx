import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function CardProduct({ addToCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCart();


  const makeSlug = (title, id) => {
    return `${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${id}`;
  };



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
  useEffect(() => {
    console.log("Cart updated :", cart);
  }, [cart])

  // const addToCart = (product) => {
  //   setCart([...cart, { ...product, qty: 1 }]);
  // };

  // const handleAddToCart = (item) => {
  //   const productData = {
  //     id: item.id,
  //     title: item.title,
  //     price: item.price,
  //     image: item.image,
  //     qty: 1,
  //   };

  //   // console.log("Product to add:", addToCart , productData);
  //   // if (addToCart){
  //   //   console.log("Adding to cart:", productData);
  //   //   addToCart(productData)

  //   // } else{
  //   //   console.log("addToCart function not provided");
  //   // }
  //   setCart([...cart, { ...productData }]);
  // };

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

      // If new product → add to array
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
    <>
      {/* <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div class="full">
                <h3>Products</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="product_section layout_padding">

        <div className="container">
          <div className="heading_container heading_center mb-5">
            <h2>
              Our <span>Products</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            {products.map((item) => (
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
        </div>
      </section>
    </>
  );
}
