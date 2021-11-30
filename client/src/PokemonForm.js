import axios from 'axios';
import React, {useState} from 'react';

const PokemonForm = (props) => {
  const {
    id,
    addPokemon,
    name: initialName,
    location: initialLocation,
    move: initialMove,
    poketype: initialType,
    updatePokemon,
  } = props;
  const [name, setName] = useState(initialName ? initialName : "");
  const [location, setLocation] = useState(initialLocation ? initialLocation : "");
  const [move, setMove] = useState(initialMove ? initialMove : "");
  const [poketype, setType] = useState(initialType ? initialType : "");

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, location: location, move: move, poketype: poketype });
    const pokemon = { name: name, location: location, move: move, poketype: poketype };

    if (id) {
      // update logic here
      try {
        let response = await axios.put(`/api/pokemons/${id}`, pokemon);
        console.log(response.data);
        // need update UI (update response.data in items)
        updatePokemon(response.data);
      } catch (err) {
        alert(`${err.response.data.errors}`);
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors);
      }
    } else {
      // creaete logic here
      // axios call here
      // save to database DONE
      try {
        let response = await axios.post("/api/pokemons", pokemon);
        console.log(response.data);
        // need update  (add response.data to items)
        addPokemon(response.data.data);
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <h1>{id ? "Edit" : "New"} Pokemon </h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Location</p>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Move</p>
        <input value={move} onChange={(e) => setMove(e.target.value)} />
        <p>Type</p>
        <input value={poketype} onChange={(e) => setType(e.target.value)} />
        <button>{id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};


export default PokemonForm;