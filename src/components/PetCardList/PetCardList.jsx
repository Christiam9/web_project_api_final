import "./PetCardList.css";
import PetCard from "../PetCard/PetCard";

function PetCardList() {
  return (
    <section className="pet-list">
      <h2 className="pet-list__title">Mascotas en adopción</h2>

      <PetCard />
    </section>
  );
}

export default PetCardList;
