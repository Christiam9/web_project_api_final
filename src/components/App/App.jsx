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

  useEffect(() => {
    setIsLoading(true);

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

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home dogs={dogs} isLoading={isLoading} error={error} />}
        />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
