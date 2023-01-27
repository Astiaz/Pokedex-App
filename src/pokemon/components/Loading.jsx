
export const Loading = ({hasError}) => {
  return (
    <>
        {
            (hasError)
                ? <h1>Error 404</h1>
                : <p>Cargando...</p>
        }
    </>
  )
}
