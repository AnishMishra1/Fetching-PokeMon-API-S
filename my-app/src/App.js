import { Link } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex.js'
import CustomRoutes from './components/Routes/CustomRoutes';

function App() {
  return (
    <>
    <h1 id="Heading">
      <Link to="/">Pokedex</Link></h1>
    <CustomRoutes/>
    </>
    
  );
}

export default App;
