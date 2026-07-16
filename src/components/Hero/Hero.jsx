import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero({ searchQuery, setSearchQuery }) {
  const handleExplore = () => {
    const section = document.getElementById("pet-list");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
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

        <button className="hero__button" type="button" onClick={handleExplore}>
          Explorar mascotas
        </button>
      </div>
    </section>
  );
}

export default Hero;
