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
  const [favorites, setFavorites] = useState([]);

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

  const handleFavorite = (pet) => {
    const isFavorite = favorites.some((favorite) => favorite.id === pet.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== pet.id));
    } else {
      setFavorites([...favorites, pet]);
    }
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
            />
          }
        />

        <Route path="/favoritos" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
