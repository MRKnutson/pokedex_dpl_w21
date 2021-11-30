import React from 'react';


const Pokemon = (props)=>{
  return(
    <div>
       <p>Name: {props.name}</p>
       <p>Location: {props.location}</p>
       <p>Move: {props.move}</p>
       <p>Type: {props.poketype}</p>
       <p>id: {props.id}</p>
    </div>
  );
};

export default Pokemon;