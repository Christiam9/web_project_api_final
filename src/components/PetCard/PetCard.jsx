import "./PetCard.css";

function PetCard({ pet, handleFavorite, isFavorite }) {
  const breed = pet.breeds[0];

  return (
    <article className="pet-card">
      <img
        className="pet-card__image"
        src={pet.url}
        alt={`Fotografía de ${breed.name}`}
      />

      <div className="pet-card__content">
        <button
          className="pet-card__favorite"
          type="button"
          onClick={() => handleFavorite(pet)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <h3 className="pet-card__name">{breed.name}</h3>

        <p className="pet-card__description">🐾 {breed.temperament}</p>

        {breed.life_span && (
          <p className="pet-card__age">🎂 {breed.life_span}</p>
        )}

        <p className="pet-card__city">📍 Disponible para adopción</p>
      </div>
    </article>
  );
}

export default PetCard;
