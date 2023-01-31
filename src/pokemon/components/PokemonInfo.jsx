
export const PokemonInfo = ({data}) => {
    
    const { name, id, sprites, types, height, weight } = data;

    const nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <>
            <div className="row bg-warning border border-dark rounded" style={{width: `100vw`}}>
                <div className="col-6 d-flex justify-content-center">
                    <img style={{height: 300}} src={sprites.front_default} alt={name} />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <div className="d-flex">
                        <h2 className="me-4">{ nameToUpper }</h2>
                        <div style={{width: 32, height: 32}} className="d-flex justify-content-center align-items-center p-2 bg-danger border border-dark rounded-circle">
                            <span style={{color: 'white'}}>
                                {id}
                            </span>
                        </div>
                    </div>
                    <div className="w-50 my-2 d-flex justify-content-between">
                        {
                            types.map( ({type}) => (
                                <div key={type.name} className="text-bg-secondary my-2 rounded-pill text-center" style={{width: 100}}>
                                    <p key={type.name.toUpperCase()} className="my-1">{type.name.toUpperCase()}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex">
                        <div className="me-4">Height: {height}</div>
                        <div className="me-4">Weight: {weight}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
