import "./SearchForm.css";

function SearchForm({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Busca una mascota por raza..."
        className="search__input"
        value={searchQuery}
        onChange={handleChange}
      />
    </section>
  );
}

export default SearchForm;
