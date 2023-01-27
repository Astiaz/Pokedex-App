
export const PokemonInfo = ({data}) => {
    
    const { name, id, sprites, types, height, weight } = data;

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <img src={sprites.front_default} alt={name} />
                </div>
                <div className="col-8">
                    <div className="d-flex">
                        <h2 className="me-4">{name}</h2>
                        <span> <small> {id} </small> </span>
                    </div>
                    {
                        types.map( t => (
                            <p key={t.type.name} className="me-3">{t.type.name}</p>
                        ))
                    }
                    <div className="d-flex">
                        <div className="me-4">Height: {height}</div>
                        <div className="me-4">Weight: {weight}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
