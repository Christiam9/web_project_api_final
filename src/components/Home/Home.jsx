import Main from "../Main/Main";
import About from "../About/About";

function Home({ dogs, isLoading, error, searchQuery, setSearchQuery }) {
  return (
    <>
      <Main
        dogs={dogs}
        isLoading={isLoading}
        error={error}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <About />
    </>
  );
}

export default Home;
