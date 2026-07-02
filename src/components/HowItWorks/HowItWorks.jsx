import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">¿Cómo adoptar?</h2>

      <div className="how-it-works__steps">
        <article className="how-it-works__step">
          <h3 className="how-it-works__step-title">1. Encuentra</h3>
          <p className="how-it-works__step-text">
            Explora las mascotas disponibles y elige la que más te guste.
          </p>
        </article>

        <article className="how-it-works__step">
          <h3 className="how-it-works__step-title">2. Conoce</h3>
          <p className="how-it-works__step-text">
            Revisa su información y conoce su historia.
          </p>
        </article>

        <article className="how-it-works__step">
          <h3 className="how-it-works__step-title">3. Adopta</h3>
          <p className="how-it-works__step-text">
            Inicia sesión y envía tu solicitud de adopción.
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
