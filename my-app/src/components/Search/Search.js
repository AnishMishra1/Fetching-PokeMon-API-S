//import css
import { useState } from 'react';
import './Search.css'
import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}) {

    const debbouncedCallBack = useDebounce((e) => updateSearchTerm(e.target.value));

    
    return (
        <div className="search-wrapper">
          <input
          id="pokemon-name-search"
             type="Text"
             placeholder="Searching pokemon..."
             onChange={debbouncedCallBack}
            />
            
        </div>
    )
}

export default Search;

//