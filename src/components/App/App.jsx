import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getDogs } from "../../utils/PetApi";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    getDogs()
      .then((data) => {
        setDogs(data);
      })
      .catch((err) => {
        console.error(err);
        setError("No fue posible cargar las mascotas.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (pet) => {
    const isFavorite = favorites.some((favorite) => favorite.id === pet.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== pet.id));
    } else {
      setFavorites([...favorites, pet]);
    }
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.breeds[0].name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              dogs={filteredDogs}
              isLoading={isLoading}
              error={error}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleFavorite={handleFavorite}
              favorites={favorites}
              visibleCards={visibleCards}
              handleShowMore={handleShowMore}
            />
          }
        />

        <Route
          path="/favoritos"
          element={
            <Favorites favorites={favorites} handleFavorite={handleFavorite} />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
