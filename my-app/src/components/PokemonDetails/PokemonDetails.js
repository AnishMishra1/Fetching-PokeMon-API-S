import React ,{useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const PokemonDetails = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});

    async function downloadPokemon() {
        const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data);

        

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        });
    }

    

    useEffect(() => {
        downloadPokemon()
    },[])
  return (
    <div>
        <div>name: {pokemon.name}</div>
        <div><img src={pokemon.image} /></div>
        <div>weight: {pokemon.weight}</div>
        <div>height: {pokemon.height}</div>
        <div>
            {/* {pokemon.types.map((v) => <div key ={v} >{v}</div>)} */}
        </div>
    </div>
  )
}

export default PokemonDetails