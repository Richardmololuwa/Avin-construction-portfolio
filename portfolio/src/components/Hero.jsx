import heroImage1 from "../assets/images/heroimage1.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage1})`,
      }}
    >
      <div className="overlay">

        <span className="hero-subtitle">
          ARCHITECTURE • CONSTRUCTION • DESIGN
        </span>

        <h1>
          Designing and Building Spaces
          <br />
          That Inspire.
        </h1>

        <p>
          Contemporary architectural solutions crafted
          with elegance, innovation and precision.
        </p>

        

      </div>
    </section>
  );
}

export default Hero;