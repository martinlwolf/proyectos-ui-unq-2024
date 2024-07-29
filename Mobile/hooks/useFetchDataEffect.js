import { useEffect, useState } from "react"

const useFetchDataEffect = ( fetchData, initialize, dependencies, handlerError = () => {} ) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [dataState, setDataState] = useState(initialize)

    const reloadScreen = () => setRefreshing(!refreshing)

    useEffect(() => {
        setIsLoading(true)
        fetchData().then(({ data }) => { 
            setDataState(data)
            setIsLoading(false)
        }).catch((err) => {
            handlerError(err)
            console.log(err)
            setIsLoading(false)
            setIsError(true)
        })
    }, [...dependencies, refreshing])

    return { isLoading, isError, reloadScreen, dataState }
}

export default useFetchDataEffect