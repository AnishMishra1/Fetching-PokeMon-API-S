import Search from "../Search/Search.js"

//css import
import './Pokedex.css' 



function Pokedex() {
    return (
      <div className="pokemon-wrapper">
      <h1 id="Heading">Pokedex</h1>
      <Search />
      </div>

    )
}

export default Pokedex;