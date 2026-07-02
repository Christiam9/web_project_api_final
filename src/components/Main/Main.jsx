import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import PetCardList from "../PetCardList/PetCardList";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";

function Main() {
  return (
    <main className="main">
      <Hero />
      <SearchForm />
      <PetCardList />
      <HowItWorks />
    </main>
  );
}

export default Main;
