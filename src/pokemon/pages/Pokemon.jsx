import { useParams } from "react-router-dom"
import { PokemonInfo, Loading } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Pokemon = () => {
    const {name} = useParams();

    const {data, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            {
                (!data) 
                    ? <Loading hasError={hasError}/>
                    : <PokemonInfo data={data} {...data}/>
            }
        </div>
    )
}
