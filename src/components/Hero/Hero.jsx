import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Encuentra un hogar para un amigo de cuatro patas
        </h1>

        <p className="hero__description">
          Explora mascotas en adopción y ayúdalas a encontrar una familia.
        </p>

        <button className="hero__button">Ver mascotas</button>
      </div>
    </section>
  );
}

export default Hero;
