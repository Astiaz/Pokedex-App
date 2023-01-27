import { PokemonList } from '../components';
import { useFetch } from '../hooks/useFetch';

export const PokemonHome = () => {
    
    const { data } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=120&offset=0');

    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    (!data) 
                        ? <h2>Cargando...</h2>
                        : data.results.map( pokemon => (
                            <PokemonList key={pokemon.name} url={pokemon.url} /> 
                    ))
                }
            </div>
        </>
    )
}
