import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/PokeMon.js'
import Mon from '../Pokemon/PokeMon.js';
import './PokemonList.css'

const PokenmonList = () => {

    // const [PokenmonList, setPokemonList] = useState([]);
    // const [isLoading, SetIsLoading] = useState(true);

    // const [pokeDexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    // const [ nextUrl, setNextUrl] = useState('');
    // const [ prevUrl, setPrevUrl] = useState('');

    //Using Advance useState for cleaning the code 

    const [ pokemaonListState, setPokemonListState] = useState({
      PokenmonList: [],
      isLoading: true,
      pokeDexUrl: "https://pokeapi.co/api/v2/pokemon",
      nextUrl: '',
      prevUrl:''

    })


    async function downloadPokemon() {

        //SetIsLoading(true)
        setPokemonListState({...pokemaonListState,isLoading:true})


        //this download list of 20 pokemon
       // const response = await axios.get(pokeDexUrl); // alternate
       const response = await axios.get(pokemaonListState.pokeDexUrl);

        //console.log(response.data)
        //setNextUrl(response.data.next); alternate
        //setPrevUrl(response.data.previous) 
        //setPokemonListState({...pokemaonListState, prevUrl:response.data.previoust})
        setPokemonListState((state) => ({
          ...state, 
          nextUrl:response.data.next, 
           prevUrl:response.data.previoust
          }));

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
        //setPokemonList(res);
        setPokemonListState((state) => ({
          ...state,
           PokenmonList: res, 
           isLoading:false
          }))
       // SetIsLoading(false);

    }

    useEffect(() =>
    {
        downloadPokemon();
    },[pokemaonListState.pokeDexUrl])
  return (
    <div >
        <div>PokenmonList</div>
        <div className='Pokemon-wrapper'>
        {(pokemaonListState.isLoading) ? "loading..." : 
          pokemaonListState.PokenmonList.map((poke) => <Mon name = {poke.name} image ={poke.image} key={poke.id} id={poke.id} />)
        }
        </div>
        <div className='Btn-Btn'>
          {/* <button disabled = {pokemaonListState.prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled = {pokemaonListState.nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button> */}
        <button disabled = {pokemaonListState.prevUrl == null} onClick={() => setPokemonListState({...pokemaonListState,pokeDexUrl:pokemaonListState.prevUrl})}>Prev</button>
          <button disabled = {pokemaonListState.nextUrl == null} onClick={() => setPokemonListState({...pokemaonListState,pokeDexUrl:pokemaonListState.nextUrl})}>Next</button>
        </div>
        
    </div>
  )
}

export default PokenmonList