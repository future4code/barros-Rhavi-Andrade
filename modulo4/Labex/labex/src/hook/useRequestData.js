import react, { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            }).catch(error => {
                setIsLoading(false)
                setError(error)

            })
    }, [url])
    return [data, isLoading, error];
}

export default useRequestData;
