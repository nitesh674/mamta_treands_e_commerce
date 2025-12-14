import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loader from "./components/loader.jsx";
import { CartProvider } from "./context/CartContext";

// Bootstrap CSS + JS (Bootstrap 5)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


// Template wali CSS
import "./assets/css/style.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
    <Loader>
      <App />
    </Loader>
    </CartProvider>
  </BrowserRouter>
);
