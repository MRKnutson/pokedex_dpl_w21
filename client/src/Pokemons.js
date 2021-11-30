import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import PokemonForm from './PokemonForm';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    console.log("mounted");
    getPokemons();
  }, []);

  const getPokemons = async()=>{
    let response = await axios.get('/api/pokemons');
    setPokemons(response.data);
    console.log(response);
  };

  const addPokemon = (pokemon) => {
    setPokemons([pokemon, ...pokemons]);
  };

  const updatePokemon = (pokemon) => {
    let updatedPokemons = pokemons.map((p) => (p.id === pokemon.id ? pokemon : p));
    setPokemons(updatedPokemons);
  };

  const renderPokemons=()=>{
    if(pokemons.length === 0) {
      return <p>No Pokemon Found. Catch more and try again.</p>;
    }
    return pokemons.map((pokemon)=>{
      return <Pokemon {...pokemon} updatePokemon={updatePokemon}/>
      
      // deletePokemon={deletePokemon}
    });
  };

  return (
  <div>
    <h1>Pokemon</h1>
    <PokemonForm addPokemon = {addPokemon}/>
    {renderPokemons()}
  </div>
  );
};



export default Pokemons;