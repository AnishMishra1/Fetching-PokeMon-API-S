import React ,{useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import usePokemon from '../../hooks/usePokemon';
import usePokemonDetails from '../../hooks/usePokemonDetails';

const PokemonDetails = ({pokemonName}) => {

   const {id} = useParams();
   const [pokemon] = usePokemonDetails(id,pokemonName);
  return (
    <div>
        <div>name: {pokemon.name}</div>
        <div><img src={pokemon.image} /></div>
        <div>weight: {pokemon.weight}</div>
        <div>height: {pokemon.height}</div>
        <div>
            {pokemon.types && pokemon.types.map((v) => <div key ={v} >{v}</div>)}
        </div>
        
        {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    more {pokemon.types[0]} type pokemons

                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }
         
            
    </div>
  )
}

export default PokemonDetails;
//