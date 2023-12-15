import "./NavBar.css";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div className="button-container">
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            if (pokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
            setPokemonIndex(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
