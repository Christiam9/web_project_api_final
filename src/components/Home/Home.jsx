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
      />
      <About />
    </>
  );
}

export default Home;
