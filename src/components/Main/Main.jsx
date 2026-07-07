import "./Main.css";
import PetCardList from "../PetCardList/PetCardList";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";

function Main() {
  return (
    <main className="main">
      <Hero />
      <PetCardList />
      <HowItWorks />
    </main>
  );
}

export default Main;
