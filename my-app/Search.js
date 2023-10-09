//import css
import { useState } from 'react';
import './Search.css'

function Search({updateSearchTerm}) {

    
    return (
        <div className="search-wrapper">
          <input
          id="pokemon-name-search"
             type="Text"
             placeholder="Searching pokemon..."
             onChange={(e) => updateSearchTerm(e.target.value)}
            />
            
        </div>
    )
}

export default Search;