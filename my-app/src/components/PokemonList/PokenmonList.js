import React from 'react';
import Pokemon from '../Pokemon/PokeMon.js'
import Mon from '../Pokemon/PokeMon.js';
import './PokemonList.css'
import usePokemon from '../../hooks/usePokemon.js';

const PokenmonList = () => {

    

    
   const { pokemaonListState, setPokemonListState} = usePokemon();
    

  return (
    <div >
        <div>PokenmonList</div>
        <div className='Pokemon-wrapper'>
        {(pokemaonListState.isLoading) ? "loading..." : 
          pokemaonListState.PokenmonList.map((poke) => <Mon name = {poke.name} image ={poke.image} key={poke.id} id={poke.id} />)
        }
        </div>
        <div className='Btn-Btn'>
        <button disabled = {pokemaonListState.prevUrl == null} onClick={() => setPokemonListState({...pokemaonListState,pokeDexUrl:pokemaonListState.prevUrl})}>Prev</button>
          <button disabled = {pokemaonListState.nextUrl == null} onClick={() => setPokemonListState({...pokemaonListState,pokeDexUrl:pokemaonListState.nextUrl})}>Next</button>
        </div>
        
    </div>
  )
}

export default PokenmonList