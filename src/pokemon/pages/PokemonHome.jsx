import { PokemonList } from '../components';
import { useFetch } from '../hooks/useFetch';

export const PokemonHome = () => {
    
    const page = 0;

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ page * 10}`);

    return (
        <>
            <div className="py-4 row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
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
