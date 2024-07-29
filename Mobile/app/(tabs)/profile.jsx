import { SafeAreaView } from "react-native-safe-area-context"
import ViewProfile from "../../components/ViewProfile"
import { useEffect, useState } from "react"
import { getUser } from "../../service/Api"
import { StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import TikTokSpinner from "../../components/TikTokSpinner"
import { Redirect } from "expo-router"


const Profile = () => {
   
    const [ token ,setToken ] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
            AsyncStorage.getItem('token').then((res)=>{
                setToken(res)
                getUser().then(({data}) => {
                    setUser(data)
                    setIsLoading(false)
                })
                .catch(()=>{
                    setIsLoading(false)
                })
            }
        )
    }, [token])


    return(
        <SafeAreaView style={style.base}>
            {

                isLoading ? <TikTokSpinner/> :
                            token ? <ViewProfile user={user} setToken={setToken} />
                            : <Redirect href="/login"/>
            }        
        </SafeAreaView>
    )

}

    const style = StyleSheet.create({
        base: {
            backgroundColor:"white",
            height:"100%",
            paddingLeft:10,
            paddingRight:10
        }
    })

export default Profile 