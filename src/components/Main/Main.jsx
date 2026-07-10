import "./Main.css";
import PetCardList from "../PetCardList/PetCardList";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";

function Main({ dogs, isLoading, error }) {
  return (
    <main className="main">
      <Hero />
      <PetCardList dogs={dogs} isLoading={isLoading} error={error} />
      <HowItWorks />
    </main>
  );
}

export default Main;
