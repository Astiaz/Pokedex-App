
export const PokemonCard = ({ data }) => {

    const name = data.species.name;
    const nameToUpper = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="card-body" >
            <img className="card-img-top" src={data.sprites.front_default} alt={ nameToUpper } />
            <div className="text-center">
                <h2 className="card-title mb-1">{ nameToUpper }</h2>
                <div className="d-flex justify-content-center">
                    {
                        data.types.map( ({type}) => (
                            <div key={type.name} 
                                className=" 
                                    d-flex justify-content-center align-items-center 
                                    text-bg-secondary ms-2 px-2 py-1 pb-1 rounded-pill
                                "
                            >
                                <p className="align-middle mb-0">{type.name.toUpperCase()}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
