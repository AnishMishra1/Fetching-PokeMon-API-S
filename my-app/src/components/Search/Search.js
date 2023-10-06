//import css
import './Search.css'

function Search() {
    return (
        <div className="search-wrapper">
          <input
          id="pokemon-name-search"
             type="Text"
             placeholder="Searching pokemon..."
            />
        </div>
    )
}

export default Search;