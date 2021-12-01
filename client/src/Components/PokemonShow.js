import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Pokecard from './PokecardStyle';


const PokemonShow = ()=>{

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [move, setMove] = useState("");
  const [poketype, setType] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getPokemon();
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

  const deletePokemon = async () => {
    await axios.delete(`/api/pokemons/${params.id}`);
    navigate("/");
  };

  return(
    <Pokecard>
       <p>Name: {name}</p>
       <p>Location: {location}</p>
       <p>Move: {move}</p>
       <p>Type: {poketype}</p>
       <p>id: {params.id}</p>
       <Link to={`/pokemons/${params.id}/edit`}>Edit</Link>
       <button onClick={()=>deletePokemon()} >Delete</button>
    </Pokecard>
  );
};

export default PokemonShow;