import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/PokeMon.js'
import Mon from '../Pokemon/PokeMon.js';
import './PokemonList.css'

const PokenmonList = () => {

    const [PokenmonList, setPokemonList] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    const [pokeDexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const [ nextUrl, setNextUrl] = useState('');
    const [ prevUrl, setPrevUrl] = useState('');


    async function downloadPokemon() {

        SetIsLoading(true)
        const response = await axios.get(pokeDexUrl); //this download list of 20 pokemon 
        //console.log(response.data)
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous)

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
    },[pokeDexUrl])
  return (
    <div >
        <div>PokenmonList</div>
        <div className='Pokemon-wrapper'>
        {(isLoading) ? "loading..." : 
          PokenmonList.map((poke) => <Mon name = {poke.name} image ={poke.image} key={poke.id} />)
        }
        </div>
        <div className='Btn-Btn'>
          <button disabled = {prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
          <button disabled = {nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
        </div>
        
    </div>
  )
}

export default PokenmonList