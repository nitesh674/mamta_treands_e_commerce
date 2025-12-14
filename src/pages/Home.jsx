import SlidImages from "../assets/images/homevidoe.mp4";
import './../assets/css/style.css'

export default function Home() {
  return (
    <div>
      <section className="slider_section ">
        <div className="slider_bg_box">
          {/* <img src={SlidImages} alt="Banner" /> */}
          <video   src={SlidImages} autoPlay muted loop></video>
        </div>

        <div
          id="customCarousel1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium, laborum
                        eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium, laborum
                        eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium, laborum
                        eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="carousel-indicators">
  <button
    type="button"
    data-bs-target="#customCarousel1"
    data-bs-slide-to="0"
    className="active"
    aria-current="true"
    aria-label="Slide 1"
  ></button>
  <button
    type="button"
    data-bs-target="#customCarousel1"
    data-bs-slide-to="1"
    aria-label="Slide 2"
  ></button>
  <button
    type="button"
    data-bs-target="#customCarousel1"
    data-bs-slide-to="2"
    aria-label="Slide 3"
  ></button>
</div>

        </div>
      </section>
    </div>
  );
}
