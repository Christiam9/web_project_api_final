import Main from "../Main/Main";
import About from "../About/About";

function Home({ dogs }) {
  return (
    <>
      <Main dogs={dogs} />
      <About />
    </>
  );
}

export default Home;
