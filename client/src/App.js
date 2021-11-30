import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import PokemonForm from "./Components/PokemonForm";
import Pokemons from './Components/Pokemons';
import PokemonShow from "./Components/PokemonShow";

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Pokemons/>}/>
      <Route path="/pokemons/new" element={<PokemonForm/>}/>
      <Route path="/pokemons/:id" element={<PokemonShow/>}/>
      <Route path="/pokemons/:id/edit" element={<PokemonForm/>}/>
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;
