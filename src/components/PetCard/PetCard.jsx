import "./PetCard.css";

function PetCard() {
  return (
    <article className="pet-card">
      <img
        className="pet-card__image"
        src="https://placehold.co/300x220"
        alt="Mascota en adopción"
      />

      <div className="pet-card__content">
        <h3 className="pet-card__name">Luna</h3>

        <p className="pet-card__description">
          Perra mestiza de 2 años, amigable y en busca de un hogar.
        </p>

        <button className="pet-card__button">Ver más</button>
      </div>
    </article>
  );
}

export default PetCard;
