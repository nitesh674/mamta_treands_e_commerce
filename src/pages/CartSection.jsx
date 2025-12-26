// // src/pages/CartSection.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CartSection({ cart, setCart }) {
//   const navigate = useNavigate(); 

//   const [showAlert, setShowAlert] = useState(false);
//   const [busyId, setBusyId] = useState(null); // id of item being updated/removed
//   const [isClearing, setIsClearing] = useState(false);

//   const handleAlert = () => {
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000);
//   };

//   // Helper: POST JSON to endpoint and return parsed JSON or throw
//   const postJson = async (url, body) => {
//     const res = await fetch(url, {
//       method: "POST",
//       credentials: "include",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });
//     if (!res.ok) {
//       const text = await res.text();
//       throw new Error(`Request failed: ${res.status} ${text}`);
//     }
//     return res.json();
//   };

//   const removeFromCart = (id) => {
//   fetch("http://localhost:5000/api/cart/remove", {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ id }),
//   })
//     .then((res) => res.json())
//     .then((data) => setCart(data))
//     .catch(console.error);
// };

// const updateQty = (id, change) => {
//   const newQty = cart.find((item) => item.id === id).qty + change;
//   if (newQty < 1) return; // Prevent qty < 1
//   fetch("http://localhost:5000/api/cart/update", {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ id, qty: newQty }),
//   })
//     .then((res) => res.json())
//     .then((data) => setCart(data))
//     .catch(console.error);
// };

// const clearCart = () => {
//   fetch("http://localhost:5000/api/cart/clear", {
//     method: "POST",
//     credentials: "include",
//   })
//     .then((res) => res.json())
//     .then((data) => setCart(data))
//     .catch(console.error);
// };
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4">🛒 Cart</h2>
//       <div className="row">
//         {/* Left Section */}
//         <div className="col-md-8">
//           <div className="card p-3">
//             <h5>Your Cart ({totalItems} items)</h5>
//             <hr />
//             {cart.length === 0 ? (
//               <p>Your cart is currently empty.</p>
//             ) : (
//               cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="d-flex align-items-center justify-content-between border-bottom py-3"
//                 >
//                   <div className="d-flex align-items-center">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         objectFit: "contain",
//                         marginRight: "15px",
//                       }}
//                         onClick={() => navigate(`/product/${item.id}`)}

//                     />
//                     <div>
//                       <h6 className="mb-1">{item.title}</h6>
//                       <p className="mb-0">${(item.price || 0).toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <div className="d-flex align-items-center">
//                     <button
//                       className="btn btn-outline-secondary btn-sm"
//                       onClick={() => updateQty(item.id, -1)}
//                       disabled={busyId === item.id}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.qty}</span>
//                     <button
//                       className="btn btn-outline-secondary btn-sm"
//                       onClick={() => updateQty(item.id, 1)}
//                       disabled={busyId === item.id}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="fw-bold">
//                     ${((item.price || 0) * (item.qty || 0)).toFixed(2)}
//                   </div>

//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeFromCart(item.id)}
//                     disabled={busyId === item.id}
//                   >
//                     {busyId === item.id ? "Removing..." : "Remove"}
//                   </button>
//                 </div>
//               ))
//             )}

//             {cart.length > 0 && (
//               <div className="d-flex justify-content-between mt-3">
//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={clearCart}
//                   disabled={isClearing}
//                 >
//                   {isClearing ? "Clearing..." : "Clear cart"}
//                 </button>

//                 <button
//                   className="btn btn-success"
//                   onClick={() => {
//                     handleAlert();
//                   }}
//                 >
//                   Buy Now
//                 </button>

//                 {showAlert && (
//                   <div
//                     className="alert alert-success animate__animated animate__fadeInRight"
//                     role="alert"
//                     style={{
//                       position: "fixed",
//                       bottom: "20px",
//                       right: "20px",
//                       zIndex: 1050,
//                     }}
//                   >
//                     ✅ Order placed successfully!
//                   </div>
//                 )}
//                 <button
//                   className="btn btn-dark"
//                   onClick={() => navigate("/")}
//                 >
//                   Continue shopping
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Summary Section */}
//         <div className="col-md-4">
//           <div className="card p-3">
//             <h5>Order Summary</h5>
//             <hr />
//             <p>Items: {totalItems}</p>
//             <p>Total: ${totalPrice.toFixed(2)}</p>
//             <button className="btn btn-secondary w-100 mt-2" disabled>
//               Checkout (coming soon)
//             </button>
//             <small className="text-muted">
//               Add a payments integration to enable checkout.
//             </small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/CartSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartSection({ }) {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  const [showAlert, setShowAlert] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [isClearing, setIsClearing] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const makeSlug = (title, id) => {
    return `${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${id}`;
  };


  // ❌ Backend removed – frontend only
  const removeFromCart = (id) => {
    setBusyId(id);
    setCart((prev) => prev.filter((item) => item.id !== id));
    setTimeout(() => setBusyId(null), 300);
  };

  // ❌ Backend removed – frontend only
  const updateQty = (id, change) => {
    setBusyId(id);
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
    setTimeout(() => setBusyId(null), 300);
  };

  // ❌ Backend removed – frontend only
  const clearCart = () => {
    setIsClearing(true);
    setCart([]);
    setTimeout(() => setIsClearing(false), 300);
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 0),
    0
  );

  const handleBuyNow = async (item) => {
const API_URL = "https://backend-tz63.onrender.com/"
    try {
      // 1️⃣ backend se order create
      const res = await fetch(`${API_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: (item.price || 0) * (item.qty || 1),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_RvtiF8kZT8eUy2", // 🔴 apna TEST KEY ID
        amount: data.order.amount,
        currency: "INR",
        name: "Mamta Trends",
        description: item.title,
        image: item.image,
        order_id: data.order.id,

        handler: async function (response) {
          // 3️⃣ verify payment
        
          const verifyRes = await fetch(
            `${API_URL}/verify-payment`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            }
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            setShowAlert(true);

            // optional: paid item cart se hata do
            setCart((prev) =>
              prev.filter((cartItem) => cartItem.id !== item.id)
            );

            setTimeout(() => setShowAlert(false), 3000);
          } else {
            alert("Payment verification failed");
          }
        },

        prefill: {
          name: "Customer",
          email: "test@email.com",
          contact: "9999999999",
        },

        theme: {
          color: "#28a745",
        },
      };

      // 4️⃣ open razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };


  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Cart</h2>

      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          <div className="card p-3">
            <h5>Your Cart ({totalItems} items)</h5>
            <hr />

            {cart.length === 0 ? (
              <p>Your cart is currently empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border-bottom py-3"
                >
                  {/* Top section */}
                  <div className="d-flex align-items-start gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-img"
                      onClick={() =>
                        navigate(`/product/${makeSlug(item.title, item.id)}`)
                      }
                    />

                    <div className="flex-grow-1">
                      <h6 className="mb-1 title-truncate">{item.title}</h6>
                      <p className="mb-1 text-muted">
                        ${(item.price || 0).toFixed(2)}
                      </p>

                      {/* Qty controls */}
                      <div className="d-flex align-items-center gap-2 mt-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQty(item.id, -1)}
                          disabled={busyId === item.id}
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQty(item.id, 1)}
                          disabled={busyId === item.id}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom actions */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <strong>
                      ${((item.price || 0) * (item.qty || 0)).toFixed(2)}
                    </strong>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                        disabled={busyId === item.id}
                      >
                        Remove
                      </button>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleBuyNow(item)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

              ))
            )}

            {cart.length > 0 && (
              <div className="d-flex justify-content-between mt-3 flex-wrap gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={clearCart}
                  disabled={isClearing}
                >
                  {isClearing ? "Clearing..." : "Clear cart"}
                </button>



                <button
                  className="btn btn-dark"
                  onClick={() => navigate("/")}
                >
                  Continue shopping
                </button>
              </div>
            )}

            {showAlert && (
              <div
                className="alert alert-success animate__animated animate__fadeInRight"
                role="alert"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  zIndex: 1050,
                }}
              >
                ✅ Order placed successfully!
              </div>
            )}
          </div>
        </div>

        {/* Right Summary Section */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Order Summary</h5>
            <hr />
            <p>Items: {totalItems}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>

            {/* <button className="btn btn-secondary w-100 mt-2" disabled>
              Checkout (coming soon)
            </button>

            <small className="text-muted">
              Add a payments integration to enable checkout.
            </small> */}
          </div>
        </div>
      </div>
    </div>
  );
}
