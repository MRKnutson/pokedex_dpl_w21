import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={style.navDiv}>
      <Link style={style.linkText} to="/">Pokedex</Link>
      <Link style={style.linkText} to="/pokemons/new">Add Pokemon</Link>
      <Link style={style.linkText} to="/about">About</Link>
    </div>
  );
};

export default Navbar;

const style = {
  navDiv: {
    backgroundColor:'gray',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  linkText: {
    margin: ' 0px 10px 0px 10px',
    textDecoration: 'none',
    color: 'white',
  }
}