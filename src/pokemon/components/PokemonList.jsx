import { useFetch } from "../hooks/useFetch"
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({url}) => {

    const {data, isLoading} = useFetch(url);

    return (
      <div className="mt-0 mb-4">
          <div className="no-gutters">
              {
                  (isLoading) === true 
                      ?     <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                      :   <PokemonCard data={data}/>
              }
          </div>
      </div>
    )
}
