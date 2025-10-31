import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WithUs from "./components/WithUs";
import CardProduct from "./components/CardProduct";
import CartSection from "./pages/CartSection.jsx";
import About from "./pages/About";
import Products from "./pages/Products";
import NewArrivals from "./components/NewArrivals.jsx";
import ClientSection from "./pages/ClientSection.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ProductDetail from "./pages/ProductDetail";
// import Blog from "./pages/Blog";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart", { credentials: "include" })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(console.error);
  }, []);


  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(console.error);
  };



  const updateQty = (id, qty) => {
    fetch("http://localhost:5000/api/cart/update", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, qty })
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(console.error);
  };

  const clearCart = () => {
    fetch("http://localhost:5000/api/cart/clear", {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(console.error);
  };

  const cartCount = cart.reduce((s, it) => s + (it.qty || 0), 0);
  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/"
          element={
            <>
              <Home />
              <WithUs />
              <CardProduct addToCart={addToCart} />
              <NewArrivals addToCart={addToCart} />
              <ClientSection addToCart={addToCart} />
              {/* <Footer /> */}
            </>
          } />
        <Route path="/about" element={<About />} />
        <Route path="/products"  element={<Products addToCart={addToCart} />} />
        <Route path="/ClientSection" element={<ClientSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/*   <Route path="/blog" element={<Blog />} /> */}

        <Route path="/cart" element={<CartSection cart={cart} setCart={setCart} />} />
      </Routes>

      {/* <CardProduct addToCart={addToCart} /> */}

      <Footer />
    </>
  );
}

export default App;
