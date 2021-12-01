import React from 'react';
import { Link } from 'react-router-dom';
import Pokecard from './PokecardStyle';


const Pokemon = (props)=>{
  const{id, deletePokemon}=props
  const deleteOnePokemon = () =>{
    deletePokemon(id);
  };
  return(
    <Pokecard borderColor="white">
       <p>Name: {props.name}</p>
       <p>Location: {props.location}</p>
       <p>Move: {props.move}</p>
       <p>Type: {props.poketype}</p>
       <p>id: {props.id}</p>
       <Link to={`/pokemons/${props.id}`}>View Pokemon</Link>
       <Link to={`/pokemons/${props.id}/edit`}>Edit</Link>
       <button onClick={deleteOnePokemon} >Delete</button>
    </Pokecard>
  );
};

export default Pokemon;