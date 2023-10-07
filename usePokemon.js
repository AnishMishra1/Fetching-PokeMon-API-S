import React, {useEffect, useState} from 'react';
import axios from 'axios';

const usePokemon = () => {

    //Using Advance useState for cleaning the code 

    const [ pokemonListState, setPokemonListState] = useState({
        PokemonList: [],
        isLoading: true,
        pokeDexUrl: "http://pokeapi.co/api/v2/pokemon",
        nextUrl: '',
        prevUrl:''
  
      })
  
  
      async function downloadPokemon() {
  
          //SetIsLoading(true)
          setPokemonListState((state) => ({...state,isLoading:true}))
  
  
          //this download list of 20 pokemon
         // const response = await axios.get(pokeDexUrl); // alternate
         const response = await axios.get(pokemonListState.pokeDexUrl);

         const pokemonResults = response.data.results;  // we get the array of promise that will download 
               //those 20 pokemon
               //console.log(pokemonResults);
  
          //console.log(response.data)
          //setNextUrl(response.data.next); alternate
          //setPrevUrl(response.data.previous) 
          //setPokemonListState({...pokemaonListState, prevUrl:response.data.previoust})
          setPokemonListState((state) => ({
            ...state, 
            nextUrl:response.data.next, 
             prevUrl:response.data.previous
            }));

           
    
          
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
                   PokemonList: res, 
                   isLoading:false
                }))
               
         // SetIsLoading(false);
  
    }

            useEffect( () => {
                downloadPokemon() },
             [pokemonListState.pokeDexUrl]
             )


            return [ pokemonListState, setPokemonListState];
  
}

export default usePokemon;