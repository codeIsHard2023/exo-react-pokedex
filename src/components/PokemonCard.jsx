function PokemonCard({pokemon}) {
  // console.log(pokemon);
    return (
    <>
      <figure><img src = {pokemon.imgSrc} alt = {pokemon.name + " card"} /><figcaption>{pokemon.name}</figcaption></figure>     
    </>
    )
}

export default PokemonCard;

