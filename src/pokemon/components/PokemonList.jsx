import { useFetch } from "../hooks/useFetch"
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({url}) => {

    const {data, isLoading} = useFetch(url);

    return (
      <div className="">
          <div className="no-gutters">
              {
                  (isLoading) === true 
                      ?   <p> 'Cargando...' </p>
                      :   <PokemonCard data={data}/>
              }
          </div>
      </div>
    )
}
