import { View } from "react-native"
import { useEffect, useState } from "react"
import TikTokSpinner from "./TikTokSpinner"
import ErrorScreen from "./ErrorScreen"

const DataLoader = ({children, fetchData, setData, handlerError=()=>{}, dependencies=null}) => {

    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    

    useEffect(() => {
        setLoading(true)
        fetchData().then(({data}) => {
            setData(data)
            setLoading(false)
        }).catch((err) => {
            handlerError(err)
            setLoading(false)
            setIsError(true)
        })
    }, [dependencies, refreshing])

    return(

        <View style={{ height: '100%', width:'100%'}}>    
            {
                loading ? <TikTokSpinner/> :             
                          isError ? <ErrorScreen setRefreshing={setRefreshing}/>:
                                    children
            }
        </View>)
}

export default DataLoader 