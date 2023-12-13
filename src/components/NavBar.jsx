import "./NavBar.css";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div className="button-container">
      {pokemonList.map((pokemon, index) => {
        return (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
