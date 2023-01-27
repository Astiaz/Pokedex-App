import { useParams } from "react-router-dom"
import { PokemonInfo, Loading } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Pokemon = () => {
    const {name} = useParams();

    const {data, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return (
        <>
            {
                (!data) 
                    ? <Loading hasError={hasError}/>
                    : <PokemonInfo data={data} {...data}/>
            }
        </>
    )
}
