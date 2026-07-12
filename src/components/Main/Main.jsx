import "./Main.css";
import PetCardList from "../PetCardList/PetCardList";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";

function Main({
  dogs,
  isLoading,
  error,
  searchQuery,
  setSearchQuery,
  handleFavorite,
  favorites,
  visibleCards,
  handleShowMore,
}) {
  return (
    <main className="main">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PetCardList
        dogs={dogs}
        isLoading={isLoading}
        error={error}
        handleFavorite={handleFavorite}
        favorites={favorites}
        title="Mascotas en adopción"
        subtitle="Conoce algunos de los animales que buscan una familia y un hogar lleno de amor."
        emptyMessage="No se ha encontrado nada."
        visibleCards={visibleCards}
        handleShowMore={handleShowMore}
      />
      <HowItWorks />
    </main>
  );
}

export default Main;
