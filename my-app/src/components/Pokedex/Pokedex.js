import PokenmonList from "../PokemonList/PokenmonList.js";
import Search from "../Search/Search.js"

//css import
import './Pokedex.css' 



function Pokedex() {
    return (
      <div className="pokemon-wrapper">
      <h1 id="Heading">Pokedex</h1>
      <Search />
      <PokenmonList />
      </div>

    )
}

export default Pokedex;