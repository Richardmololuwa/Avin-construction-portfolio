import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay">

        <span className="hero-subtitle">
          ARCHITECTURE • INTERIOR • DESIGN
        </span>

        <h1>
          Designing Spaces
          <br />
          That Inspire.
        </h1>

        <p>
          Contemporary architectural solutions crafted
          with elegance, innovation and precision.
        </p>

        <button>View Portfolio</button>

      </div>
    </section>
  );
}

export default Hero;