import SlidImages from "../assets/images/homevidoe.mp4";
import './../assets/css/style.css'

export default function Home() {
  return (
    <div>
      <section className="hero-section">
  <video
    className="hero-video"
    src={SlidImages}
    autoPlay
    muted
    loop
    playsInline
  />

  <div className="hero-overlay"></div>

  <div className="container hero-content">
    <div className="row">
      <div className="col-lg-6 col-md-8">
        <span className="badge-sale">🔥 Sale 20% Off</span>

        <h1 className="hero-title">
          On Everything <br /> You Love
        </h1>

        <p className="hero-text">
          Discover premium fashion, modern styles and everyday essentials
          curated just for you.
        </p>

        <button className="btn hero-btn">
          Shop Now
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
