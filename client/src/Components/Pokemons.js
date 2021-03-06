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

  const updatePokemon = (pokemon) => {
    let updatedPokemons = pokemons.map((p) => (p.id === pokemon.id ? pokemon : p));
    setPokemons(updatedPokemons);
  };

  const deletePokemon = async (id) => {
    await axios.delete(`/api/pokemons/${id}`);
    // remove from UI
    const filterPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(filterPokemons);
  };

  const renderPokemons=()=>{
    if(pokemons.length === 0) {
      return <p>No Pokemon Found. Catch more and try again.</p>;
    }
    return pokemons.map((pokemon)=>{
      return <Pokemon key={pokemon.id} {...pokemon} deletePokemon={deletePokemon} updatePokemon={updatePokemon}/>
    });
  };

  return (
  <div style={style.div}>
    <h1 style={style.header}>Here are all your known pokemon:</h1>
    {/* <PokemonForm addPokemon = {addPokemon}/> */}
    {renderPokemons()}
  </div>
  );
};

const style = {
  div: {
    backgroundColor: 'rgb(10, 74, 201)',
  },
  header: {
    color: 'white',
    padding: '20px',
    marginTop: '-10px',
  }
}


export default Pokemons;