import "./PetCardList.css";
import PetCard from "../PetCard/PetCard";
import Preloader from "../Preloader/Preloader";

function PetCardList({ dogs, isLoading, error }) {
  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <section className="pet-list">
        <p className="pet-list__error">{error}</p>
      </section>
    );
  }

  return (
    <section className="pet-list">
      <h2 className="pet-list__title">Mascotas en adopción</h2>
      <p className="pet-list__subtitle">
        Conoce algunos de los animales que buscan una familia y un hogar lleno
        de amor.
      </p>

      <div className="pet-list__grid">
        {dogs.map((dog) => (
          <PetCard key={dog.id} pet={dog} />
        ))}
      </div>
    </section>
  );
}

export default PetCardList;
