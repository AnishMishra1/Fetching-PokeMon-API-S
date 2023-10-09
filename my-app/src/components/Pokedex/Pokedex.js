import { useState } from "react";
import PokenmonList from "../PokemonList/PokenmonList.js";
import Search from "../Search/Search.js"
import PokemonDetails from "../PokemonDetails/PokemonDetails.js";

//css import
import './Pokedex.css' 



function Pokedex() {
   const [searchTerm, setSearchTerm] = useState('')

    return (
      <div className="pokemon-wrapper">
    
      <Search  updateSearchTerm = {setSearchTerm} />
      
      {(!searchTerm) ?<PokenmonList />: <PokemonDetails key={searchTerm} pokemonName= {searchTerm}/>}
      </div>

    )
}

export default Pokedex;

//