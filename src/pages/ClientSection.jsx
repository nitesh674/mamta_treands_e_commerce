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
                    I’m really happy with the service! The team understood exactly what I
                    needed and delivered everything on time. The design looks amazing and
                    the website works flawlessly on all my devices.
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
                      <img src="https://i.pinimg.com/736x/2a/e6/b6/2ae6b6de48c95c7fa3f68c5a76684ada.jpg" alt="Client" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Mi-sun</h5>
                  <h6>Customer</h6>
                  <p>
                    The experience was smooth from start to finish. I really appreciated
                    how responsive and professional the team was. My site now looks
                    modern, fast, and completely reflects my brand.
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
                      <img src="https://i.pinimg.com/736x/3c/ad/d3/3cadd3b2e98141772ee4b2954978c906.jpg" alt="Client" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Seo-yeon</h5>
                  <h6>Customer</h6>
                  <p>
                    Working with them was a great decision! They quickly understood my
                    vision and turned it into a clean, functional website. The attention
                    to detail and support after delivery were impressive.
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
