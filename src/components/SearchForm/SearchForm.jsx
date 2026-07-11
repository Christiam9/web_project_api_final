import "./SearchForm.css";

function SearchForm({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca por nombre, raza o ciudad..."
          className="search__input"
          value={searchQuery}
          onChange={handleChange}
        />

        <button type="submit" className="search__button">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
