import Main from "../Main/Main";
import About from "../About/About";

function Home({
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
    <>
      <Main
        dogs={dogs}
        isLoading={isLoading}
        error={error}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleFavorite={handleFavorite}
        favorites={favorites}
        visibleCards={visibleCards}
        handleShowMore={handleShowMore}
      />
      <About />
    </>
  );
}

export default Home;
