import React from 'react';
import { Link } from 'react-router-dom';


const Pokemon = (props)=>{
  const{id, deletePokemon}=props
  const deleteOnePokemon = () =>{
    deletePokemon(id);
  };
  return(
    <div>
       <p>Name: {props.name}</p>
       <p>Location: {props.location}</p>
       <p>Move: {props.move}</p>
       <p>Type: {props.poketype}</p>
       <p>id: {props.id}</p>
       <Link to={`/pokemons/${props.id}`}>View Pokemon</Link>
       <Link to={`/pokemons/${props.id}/edit`}>Edit</Link>
       <button onClick={deleteOnePokemon} >Delete</button>
    </div>
  );
};

export default Pokemon;