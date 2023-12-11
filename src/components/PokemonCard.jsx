function PokemonCard() {
    const pokemon = pokemonList;
    return (
    <>
        {pokemon.map((element) => {
            return element.imgSrc !== undefined ? (
            <figure><img src={element.imgSrc} alt={element.name + " card"} /><figcaption>{element.name}</figcaption></figure>
            ) 
            : (
            <p> ??? <figcaption>{element.name}</figcaption></p>
            )
        })}
    </>
    )
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
export default PokemonCard;

