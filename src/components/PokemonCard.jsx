/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
  // console.log(pokemon);
    return (
    <>
      <figure>
        <img src = {pokemon.imgSrc} alt = {pokemon.name + " card"} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>     
    </>
    )
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc : PropTypes.string.isRequired,
  }).isRequired,

}

export default PokemonCard;

