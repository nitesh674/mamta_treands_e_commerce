// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer-section text-light pt-5 pb-3 mt-5"
      style={{ backgroundColor: "#f7444e", borderTop: "2px solid #f7444e" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-white">Mamta Trends</h5>
            <p className="text-white-50">
              We design and develop professional websites that help businesses
              grow faster. Fully responsive, SEO optimized, and built with
              passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-semibold mb-3 text-white">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3 text-white">Contact</h6>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i> Jaipur, India
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i> info@example.com
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i> +91 12345 67890
            </p>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3 text-white">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light mt-4 opacity-50" />

        <div className="text-center small text-white-50">
          © {new Date().getFullYear()} All Rights Reserved | Designed by{" "}
          <span className="fw-semibold text-white">Nitesh</span>
        </div>
      </div>
    </footer>
  );
}
// src/pages/ClientSection.jsx