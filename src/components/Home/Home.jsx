import Main from "../Main/Main";
import About from "../About/About";

function Home({ dogs, isLoading, error }) {
  return (
    <>
      <Main dogs={dogs} isLoading={isLoading} error={error} />
      <About />
    </>
  );
}

export default Home;
