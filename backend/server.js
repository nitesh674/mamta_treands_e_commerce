// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import Product from "./models/Product.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow frontend connection
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// ✅ Setup session to store cart data securely in MongoDB
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret-change-in-prod",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
    },
  })
);

// ✅ Fetch products
app.get("/api/products", async (req, res) => {
  const products = await Product.find().sort({ id: 1 });
  res.json(products);
});

// ✅ Get cart
app.get("/api/cart", async (req, res) => {
  req.session.cart = req.session.cart || [];
  res.json(req.session.cart);
});

// ✅ Add to cart
app.post("/api/cart/add", async (req, res) => {
  const product = req.body;
  if (!product || !product.id)
    return res.status(400).json({ error: "Invalid product" });

  req.session.cart = req.session.cart || [];
  const idx = req.session.cart.findIndex((p) => p.id === product.id);

  if (idx >= 0) {
    req.session.cart[idx].qty =
      (req.session.cart[idx].qty || 1) + (product.qty || 1);
  } else {
    req.session.cart.push({ ...product, qty: product.qty || 1 });
  }

  req.session.save((err) => {
    if (err) return res.status(500).json({ error: "Failed to save session" });
    res.json(req.session.cart);
  });
});

// ✅ Update quantity
app.post("/api/cart/update", (req, res) => {
  const { id, qty } = req.body;
  if (typeof id === "undefined" || typeof qty === "undefined")
    return res.status(400).json({ error: "Invalid payload" });

  req.session.cart = req.session.cart || [];
  req.session.cart = req.session.cart
    .map((item) => (item.id === id ? { ...item, qty } : item))
    .filter((item) => item.qty > 0);

  req.session.save((err) => {
    if (err) return res.status(500).json({ error: "Failed to save session" });
    res.json(req.session.cart);
  });
});

// ✅ Remove item from cart
app.post("/api/cart/remove", (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "Missing id" });

  req.session.cart = req.session.cart || [];
  req.session.cart = req.session.cart.filter((item) => item.id !== id);

  req.session.save((err) => {
    if (err) {
      console.error("❌ Failed to save session after remove:", err);
      return res.status(500).json({ error: "Failed to save session" });
    }
    res.json(req.session.cart);
  }); 
});

// ✅ Clear entire cart
app.post("/api/cart/clear", (req, res) => {
  req.session.cart = [];
  req.session.save((err) => {
    if (err) return res.status(500).json({ error: "Failed to clear cart" });
    res.json(req.session.cart);
  });
});

// get single product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = await Product.findOne({ id });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("GET /api/products/:id error:", err);
    res.status(500).json({ error: "Server error" });
  }
});




mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));
