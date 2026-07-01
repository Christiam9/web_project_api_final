import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <section className="search">
      <h2 className="search__title">Buscar noticias</h2>

      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un tema..."
          className="search__input"
          value={query}
          onChange={handleChange}
          required
        />

        <button type="submit" className="search__button">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
