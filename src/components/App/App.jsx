import Header from "../Header/Header";
import About from "../About/About";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
