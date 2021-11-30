import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import PokemonForm from "./Components/PokemonForm";
import Pokemons from './Components/Pokemons';

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Pokemons/>}/>
      <Route path="/pokemons/new" element={<PokemonForm/>}/>
      <Route path="/pokemons/:id/edit" element={<PokemonForm/>}/>
    </Routes>
  </>
  );
}

export default App;
