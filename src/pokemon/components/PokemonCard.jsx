
export const PokemonCard = ({ data }) => {
  return (
    <div className="card-body" >
        <img className="card-img-top" src={data.sprites.front_default} alt={data.species.name} />
        <div className="text-center">
            <h2 className="card-title">{data.species.name}</h2>
            <div className="d-flex justify-content-center">
                {
                    data.types.map( t => (
                        <p key={t.type.name} className="ms-2">{t.type.name}</p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
