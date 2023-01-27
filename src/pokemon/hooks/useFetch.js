import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const {data, isLoading, hasError} = state;

    const getFetch = async(url) => {

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            
            setState({
                data,
                isLoading: false,
                hasError: null
            })

        } catch (error) {
            setState({
                data,
                isLoading: true,
                hasError: error
            })
        }
       
    }
    
    useEffect(() => {
      getFetch(url);
    }, [url])
    


    return {
        data,
        isLoading,
        hasError,
    }
}
