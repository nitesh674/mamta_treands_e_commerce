import React from "react";
import ClientImg from "../assets/images/client.jpg";

export default function ClientSection() {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        {/* Heading */}
        <div className="heading_container heading_center">
          <h2>Customer&apos;s Testimonial</h2>
        </div>

        {/* Carousel */}
        <div
          id="carouselExample3Controls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Carousel Item 1 */}
            <div className="carousel-item active">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <img src={ClientImg} alt="Client" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Anna Trevor</h5>
                  <h6>Customer</h6>
                  <p>
                    Dignissimos reprehenderit repellendus nobis error quibusdam?
                    Atque animi sint unde quis reprehenderit, et, perspiciatis,
                    debitis totam est deserunt eius officiis ipsum ducimus ad
                    labore modi voluptatibus accusantium sapiente nam! Quaerat.
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Item 2 */}
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <img src={ClientImg} alt="Client" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Anna Trevor</h5>
                  <h6>Customer</h6>
                  <p>
                    Dignissimos reprehenderit repellendus nobis error quibusdam?
                    Atque animi sint unde quis reprehenderit, et, perspiciatis,
                    debitis totam est deserunt eius officiis ipsum ducimus ad
                    labore modi voluptatibus accusantium sapiente nam! Quaerat.
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Item 3 */}
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <img src={ClientImg} alt="Client" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Anna Trevor</h5>
                  <h6>Customer</h6>
                  <p>
                    Dignissimos reprehenderit repellendus nobis error quibusdam?
                    Atque animi sint unde quis reprehenderit, et, perspiciatis,
                    debitis totam est deserunt eius officiis ipsum ducimus ad
                    labore modi voluptatibus accusantium sapiente nam! Quaerat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel_btn_box">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample3Controls"
              data-bs-slide="prev"
            >
              <i className="bi bi-arrow-left fs-2"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample3Controls"
              data-bs-slide="next"
            >
              <i className="bi bi-arrow-right fs-2"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
