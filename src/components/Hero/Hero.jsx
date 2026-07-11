import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Encuentra un hogar para un amigo de cuatro patas
        </h1>

        <p className="hero__description">
          Explora mascotas en adopción y ayúdalas a encontrar una familia.
        </p>
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <button className="hero__button">Explorar mascotas</button>
      </div>
    </section>
  );
}

export default Hero;
