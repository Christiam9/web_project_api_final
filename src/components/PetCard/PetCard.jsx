import "./PetCard.css";

function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <img className="pet-card__image" src={pet.image} alt={pet.name} />

      <div className="pet-card__content">
        <h3 className="pet-card__name">{pet.name}</h3>

        <p className="pet-card__description">{pet.species}</p>

        <p className="pet-card__age">{pet.age}</p>

        <p className="pet-card__city">{pet.city}</p>

        <button className="pet-card__button">Ver más</button>
      </div>
    </article>
  );
}

export default PetCard;
