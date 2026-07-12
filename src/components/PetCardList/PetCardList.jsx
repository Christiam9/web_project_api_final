import "./PetCardList.css";
import PetCard from "../PetCard/PetCard";
import Preloader from "../Preloader/Preloader";

function PetCardList({
  dogs,
  isLoading,
  error,
  handleFavorite,
  favorites,
  title,
  subtitle,
  emptyMessage = "No hay mascotas para mostrar.",
  visibleCards,
  handleShowMore,
}) {
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
  if (dogs.length === 0) {
    return (
      <section className="pet-list">
        <h2 className="pet-list__title">{title}</h2>
        <p className="pet-list__subtitle">{emptyMessage}</p>
      </section>
    );
  }

  return (
    <section className="pet-list">
      <h2 className="pet-list__title">{title}</h2>
      <p className="pet-list__subtitle">{subtitle}</p>

      <div className="pet-list__grid">
        {dogs.slice(0, visibleCards).map((dog) => {
          const isFavorite = favorites.some(
            (favorite) => favorite.id === dog.id,
          );

          return (
            <PetCard
              key={dog.id}
              pet={dog}
              handleFavorite={handleFavorite}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>

      {visibleCards < dogs.length && (
        <button
          className="pet-list__button"
          type="button"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default PetCardList;
