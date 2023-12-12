import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react';


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
  ];
  
  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  const [buttonBackward, setButtonBackward] = useState({className : 'hide'})
  const [buttonForward, setButtonForward] = useState({className : 'show'})
  
  const handleClickForward = () => {
    setPokemonIndex((previousIndex) => {
      const newIndex = previousIndex + 1;
  
      if (newIndex >= pokemonList.length - 1) {
        setButtonForward({ className: 'hide' });
        setButtonBackward({ className: 'show' });
      } else {
        setButtonForward({ className: 'show' });
        setButtonBackward({ className: 'show' });
      }
  
      return newIndex;
    });
  };
  
  const handleClickBackward = () => {
    setPokemonIndex((previousIndex) => {
      const newIndex = previousIndex - 1;
  
      if (newIndex <= 0) {
        setButtonBackward({ className: 'hide' });
        setButtonForward({ className: 'show' });
      } else {
        setButtonBackward({ className: 'show' });
        setButtonForward({ className: 'show' });
      }
  
      return newIndex;
    });
  };
  


  return (
    <div>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    {console.log(pokemonList[pokemonIndex])}
    <button className={buttonBackward.className} onClick={handleClickBackward}>Précedent </button>
    <button className={buttonForward.className} onClick={handleClickForward}>Suivant </button>
    </div>
  );
}

export default App
