import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/PokeMon.js'
import Mon from '../Pokemon/PokeMon.js';

const PokenmonList = () => {

    const [PokenmonList, setPokemonList] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon"


    async function downloadPokemon() {
        const response = await axios.get(POKEDEX_URL); //this download list of 20 pokemon 
        //console.log(response.data)

        const pokemonResults = response.data.results;  // we get the array of promise that will download 
        //those 20 pokemon
        //console.log(pokemonResults);

        
        // we get the array of promise that will download 
        //those 20 pokemon
        const pokemonResultsPromise = pokemonResults.map((p) => axios.get(p.url));
        //console.log(pokemonResultsPromise);
        
        
        //passing the promise array to axios.all
        const pokemonData = await axios.all(pokemonResultsPromise);
        //console.log(pokemonData);


        //now iterate on the data of each pokemon and extract id ,name ,image
        const res = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data;

            return{
                id : pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default :
                pokemon.sprites.front_shiny,
                types: pokemon.types

            }
        })
        console.log(res);
        setPokemonList(res);
        SetIsLoading(false);
    }

    useEffect(() =>
    {
        downloadPokemon();
    },[])
  return (
    <div>
        <div>PokenmonList</div>
        {(isLoading) ? "loading..." : 
          PokenmonList.map((poke) => <Mon name = {poke.name} image ={poke.image} key={poke.id} />)
        }
    </div>
  )
}

export default PokenmonList