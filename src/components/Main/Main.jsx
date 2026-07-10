import "./Main.css";
import PetCardList from "../PetCardList/PetCardList";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";

function Main({ dogs }) {
  return (
    <main className="main">
      <Hero />
      <PetCardList dogs={dogs} />
      <HowItWorks />
    </main>
  );
}

export default Main;
