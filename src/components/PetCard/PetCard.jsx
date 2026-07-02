import "./PetCard.css";

function PetCard({ name, species, age, city }) {
  return (
    <article className="pet-card">
      <img
        className="pet-card__image"
        src="https://placehold.co/300x220"
        alt="Mascota en adopción"
      />

      <div className="pet-card__content">
        <h3 className="pet-card__name">{name}</h3>

        <p className="pet-card__description">{species}</p>

        <p className="pet-card__age">{age}</p>

        <p className="pet-card__city">{city}</p>

        <button className="pet-card__button">Ver más</button>
      </div>
    </article>
  );
}

export default PetCard;
