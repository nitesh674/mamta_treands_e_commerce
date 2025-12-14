// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Brand Logo.png";
import "../assets/css/style.css";
import {useCart} from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

   const cartCount = cart.reduce(
    (total, item) => total + (item.qty || 0),
    0
  );
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]); // all products for client-side search
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Fetch products once (for suggestions)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data || []))
      .catch((err) => console.error("Failed to load products for search", err));
  }, []);

  

  // Debounce query -> compute suggestions
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      setFocusedIndex(-1);
      return;
    }

    const timeout = setTimeout(() => {
      const matches = products
        .filter((p) =>
          (p.title || "").toLowerCase().startsWith(q)
        )
        .slice(0, 6); // show up to 6 suggestions
      setSuggestions(matches);
      setFocusedIndex(-1);
    }, 180); // 180ms debounce

    return () => clearTimeout(timeout);
  }, [query, products]);

  // Close suggestions if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const onSelectSuggestion = (product) => {
    setQuery("");
    setSuggestions([]);
    setIsOpen(false);
    // navigate to product detail page
    navigate(`/product/${product.id}`);
  };

  const onKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = suggestions[focusedIndex >= 0 ? focusedIndex : 0];
      if (sel) onSelectSuggestion(sel);
    } else if (e.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <header className="header_section" ref={navRef}>
      <nav className="navbar navbar-expand-lg custom_nav-container">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/" onClick={() => setIsOpen(false)}>
          <img width={200} src={logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={25} color="#000" /> : <FaBars size={25} color="#000" />}
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ClientSection" onClick={() => setIsOpen(false)}>Testimonial</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Search + Cart Section */}
          <div className="d-flex  align-items-center justify-content-center gap-3 position-relative ">
            
            <div style={{ position: "relative", minWidth: 220 }}>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search products..."
                className="form-control border border-danger rounded p-2"
                style={{ width: "220px" }}
                
              />

              {/* Suggestions dropdown */}
              {suggestions.length > 0 && (
                <ul
                  className="list-group position-absolute"
                  style={{
                    width: "100%",
                    top: "calc(100% + 6px)",
                    zIndex: 9999,
                    maxHeight: 320,
                    overflowY: "auto",
                  }}
                >
                  {suggestions.map((p, idx) => (
                    <li
                      key={p.id}
                      role="button"
                      onClick={() => onSelectSuggestion(p)}
                      onMouseEnter={() => setFocusedIndex(idx)}
                      className={`list-group-item list-group-item-action d-flex align-items-center ${focusedIndex === idx ? "active" : ""}`}
                      style={{ cursor: "pointer" }}
                    >
                      <FaSearch size={14} style={{ color: "#555" }} />
                      <div style={{ fontSize: 14 }} className="ms-2">
                        <div style={{ fontWeight: 600 }}>{p.title.length > 50 ? p.title.slice(0, 10) + "…" : p.title}</div>   
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <Link to="/cart" className="btn btn-outline-danger position-relative" onClick={() => setIsOpen(false)}>
              <i className="bi bi-cart"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{ fontSize: "0.7rem" }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
