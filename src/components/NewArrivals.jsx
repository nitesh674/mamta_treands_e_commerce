import React from "react";
import ArrivalBg from "../assets/images/arrival-bg.jpg"; // ✅ Correct import path for React

export default function NewArrivals() {
  return (
    <section className="arrival_section">
      <div className="container">
        <div className="box">
          {/* Background image */}
          <div className="arrival_bg_box">
            <img src={ArrivalBg} alt="Arrivals" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-md-6 ms-auto">
              <div className="heading_container remove_line_bt">
                <h2>#NewArrivals</h2>
              </div>

              <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus
                dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel,
                ea eaque ab ipsa, autem similique ex unde!
              </p>

              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
