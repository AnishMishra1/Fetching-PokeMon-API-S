import React from 'react';
import Pokemon from '../Pokemon/PokeMon.js'
import Mon from '../Pokemon/PokeMon.js';
import './PokemonList.css'
import usePokemon from '../../hooks/usePokemon.js';


const PokenmonList = () => {

    

    
  const [pokemonListState, setPokemonListState] = usePokemon(false);
    

  return (
    <div >
        <div>PokenmonList</div>
        <div className='Pokemon-wrapper'>
        {(pokemonListState.isLoading) ? "loading..." : 
          pokemonListState.PokemonList.map((poke) => <Mon name = {poke.name} image ={poke.image} key={poke.id} id={poke.id} />)
        }
        </div>
        <div className='Btn-Btn'>
        <button disabled = {pokemonListState.prevUrl == null} onClick={() => setPokemonListState({...pokemonListState,pokeDexUrl:pokemonListState.prevUrl})}>Prev</button>
          <button disabled = {pokemonListState.nextUrl == null} onClick={() => setPokemonListState({...pokemonListState,pokeDexUrl:pokemonListState.nextUrl})}>Next</button>
        </div>
        
    </div>
  )
}

export default PokenmonList