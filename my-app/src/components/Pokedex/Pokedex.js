import PokenmonList from "../PokemonList/PokenmonList.js";
import Search from "../Search/Search.js"

//css import
import './Pokedex.css' 



function Pokedex() {
    return (
      <div className="pokemon-wrapper">
    
      <Search />
      <PokenmonList />
      </div>

    )
}

export default Pokedex;