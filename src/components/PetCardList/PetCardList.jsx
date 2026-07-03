import "./PetCardList.css";
import PetCard from "../PetCard/PetCard";

import dog1 from "../../images/dog-1.jpeg";
import cat2 from "../../images/cat-2.jpeg";
import cat1 from "../../images/cat-1.jpeg";

const pets = [
  {
    name: "Max",
    species: "Golden Retriever",
    age: "3 años",
    city: "Medellín",
    image: dog1,
  },
  {
    name: "Luna",
    species: "Labrador",
    age: "2 años",
    city: "Bogotá",
    image: cat1,
  },
  {
    name: "Milo",
    species: "Gato criollo",
    age: "1 año",
    city: "Cali",
    image: cat2,
  },
];

function PetCardList() {
  return (
    <section className="pet-list">
      <h2 className="pet-list__title">Mascotas en adopción</h2>
      <p className="pet-list__subtitle">
        Conoce algunos de los animales que buscan una familia y un hogar lleno
        de amor.
      </p>

      <div className="pet-list__grid">
        {pets.map((pet) => (
          <PetCard key={pet.name} pet={pet} />
        ))}
      </div>
    </section>
  );
}

export default PetCardList;
