import "./PetCardList.css";
import PetCard from "../PetCard/PetCard";

const pets = [
  {
    name: "Max",
    species: "Golden Retriever",
    age: "3 años",
    city: "Medellín",
  },
  {
    name: "Luna",
    species: "Labrador",
    age: "2 años",
    city: "Bogotá",
  },
  {
    name: "Milo",
    species: "Gato criollo",
    age: "1 año",
    city: "Cali",
  },
];

function PetCardList() {
  return (
    <section className="pet-list">
      <h2 className="pet-list__title">Mascotas en adopción</h2>

      {pets.map((pet) => (
        <PetCard
          key={pet.name}
          name={pet.name}
          species={pet.species}
          age={pet.age}
          city={pet.city}
        />
      ))}
    </section>
  );
}

export default PetCardList;
