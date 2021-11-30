import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';


const PokemonForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [move, setMove] = useState("");
  const [poketype, setType] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // don't get fact for new form, only edit
    if (params.id) {
      getPokemon();
    }
  }, []);

  const getPokemon = async () => {
    try {
      let res = await axios.get(`/api/pokemons/${params.id}`);
      setName(res.data.name);
      setLocation(res.data.location);
      setMove(res.data.move);
      setType(res.data.poketype);
    } catch (err) {
      alert("err occurred getting pokemon");
    }
  };

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, location: location, move: move, poketype: poketype });
    const pokemon = { name: name, location: location, move: move, poketype: poketype };

    if (params.id) {
      // update logic here
      try {
        let response = await axios.put(`/api/pokemons/${params.id}`, pokemon);
        console.log(response.data);
        // need update UI (update response.data in items)
        navigate("/");
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
        navigate("/");
        // need update  (add response.data to items)
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <h1>{params.id ? "Edit" : "New"} Pokemon </h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Location</p>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Move</p>
        <input value={move} onChange={(e) => setMove(e.target.value)} />
        <p>Type</p>
        <input value={poketype} onChange={(e) => setType(e.target.value)} />
        <button>{params.id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};


export default PokemonForm;