import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Pokedex</Link>
      <Link to="/pokemons/new">Add Pokemon</Link>
    </div>
  );
};

export default Navbar;