import { Routes, Route } from "react-router-dom";
import { Pokemon } from "../pokemon/pages/Pokemon";
import { PokemonHome } from "../pokemon/pages/PokemonHome";
import { NavBar } from "../ui/NavBar";

export const AppRouter = () => {
  return (
    <>
        <NavBar/>

        <div className="container">
          <Routes>
              <Route path="/" element={<PokemonHome/>}/>
              <Route path="/pokemon" element={<h1>Pokemon</h1>}/>
              <Route path="/pokemon/:name" element={<Pokemon/>}/>

              <Route path="/*" element={<h1>Pagina no encontrada</h1>}/>
          </Routes>
        </div>
    </>
  )
}
