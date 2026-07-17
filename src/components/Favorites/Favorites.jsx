import PetCardList from "../PetCardList/PetCardList";

function Favorites({ favorites, handleFavorite }) {
  return (
    <main className="favorites">
      <PetCardList
        dogs={favorites}
        isLoading={false}
        error=""
        handleFavorite={handleFavorite}
        favorites={favorites}
        title="Mis favoritos ❤️"
        subtitle="Aquí encontrarás las mascotas que has guardado."
        emptyMessage="Aún no has agregado mascotas a favoritos."
      />
    </main>
  );
}

export default Favorites;
