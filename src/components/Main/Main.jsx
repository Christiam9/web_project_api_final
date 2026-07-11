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
      />
      <HowItWorks />
    </main>
  );
}

export default Main;
