import "./PetCard.css";

function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <img className="pet-card__image" src={pet.url} alt={pet.breeds[0].name} />

      <div className="pet-card__content">
        <button className="pet-card__favorite" type="button">
          🤍
        </button>

        <h3 className="pet-card__name">{pet.breeds[0].temperament}</h3>

        <p className="pet-card__description">🐾 {pet.species}</p>

        <p className="pet-card__age">🎂 {pet.breeds[0].life_span}</p>

        <p className="pet-card__city">📍 Disponible para adopción</p>

        <button className="pet-card__button" type="button">
          Conocer mascota
        </button>
      </div>
    </article>
  );
}

export default PetCard;
